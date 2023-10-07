const jwt = require('jsonwebtoken');
const { secret } = require("../configJWT")


// Функция-middleware для проверки авторизации 
module.exports = function (req, res, next) {

    if(req.method === "OPTIONS") {
        next()
    }

    try {

        //Bearer:  ArfrfLedEeC.SAkf2ks.. - тип токена и сам токен
        const token =  req.headers.authorization.split(' ')[1]
        if (!token) {
            return res.status(403).json({ message: "Пользовтель не авторизован"})
        }

        // Если токен есть, то проверяем его. "Декодируем"
        const decodedData = jwt.verify(token,  secret )

        // Создание в запросе нове поле "user"
        req.user = decodedData
        next()

    } catch (e) {
        console.log(e)
        return res.status(403).json({ message: "Пользовтель не авторизован"})
    }
}