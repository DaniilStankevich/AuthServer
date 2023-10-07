const Router = require("express")
const contoller = require("./authController")
const router = new Router() // Теперь router может прослушивать запросы
const { check } = require("express-validator") // Валидация. "check" является функцией middleware 
const authMiddleware = require('../middleware/authMiddleware')
const roleMiddleware = require("../middleware/roleMiddleware")


//Запрос на регистрацию  "POST"
router.post('/registration', [

     check('username', "Имя пользователя не может быть пустым ").notEmpty(), 
     check('password', "Пароль должен быть меньше 4 и не больше 10 символов").isLength({min: 4, max: 10})   

],  contoller.registration)


//Запрос на вход  "POST"
router.post('/login', contoller.login)

// Эксперимент на установку различных доступов - пользователь, админ
router.get('/users', roleMiddleware(['ADMIN']), contoller.getUsers )

module.exports = router
