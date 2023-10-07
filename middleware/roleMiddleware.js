const jwt = require('jsonwebtoken');
const { secret } = require("../configJWT")


// Функция-middleware для проверки прав доступа
module.exports = function (roles) {

    return function (req, res, next) {

        if(req.method === "OPTIONS") {
            next()
        }

        try {
            // Извлечение токена 
            const token =  req.headers.authorization.split(' ')[1]
            if (!token) {
                return res.status(403).json({ message: "Пользовтель не авторизован"})
            }

            // Получение массива ролей у пользователя
            const {roles: userRoles} = jwt.verify(token, secret)

            let hasRole = false  

            // Проверка на наличие "проходной" роли
            userRoles.forEach(role => {
                if(roles.includes(role)) {
                    hasRole = true
                }
            });

            if( !hasRole ) {
                return res.status(403).json({ message: "У вас нет доступа"})
            }

            next()

            } catch (e) {
                console.log(e)
                return res.status(403).json({ message: "Пользователь не авторизован"})
            }
    }
}