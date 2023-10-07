const Router = require("express")
const contoller = require("./authController")
const router = new Router() // Создадим объект этого роутера. Теперь этот роутер может прослушивать запросы
const { check } = require("express-validator") // Валидация. "check" является функцией middleware 
const authMiddleware = require('../middleware/authmiddleware')

// Маршруты по которым будут отправляться запросы


//Запрос на регистрацию  "POST"
router.post('/registration', [

     check('username', "Имя пользователя не может быть пустым ").notEmpty(), 
     check('password', "Пороль должен быть больше 4 и меньше 10 символов").isLength({min: 4, max: 10})   

],  contoller.registration)


//Запрос на вход  "POST"
router.post('/login', contoller.login)

// Эксперимент на установку различных доступов - пользователь, админ или запрет
router.get('/users', authMiddleware, contoller.getUsers )

module.exports = router
