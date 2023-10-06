// Определяем маршруты по которым будут отправляться запросы

const Router = require("express")
const contoller = require("./authController")
// Создадим объект этого роутера
const router = new Router() // теперь этот роутер может прослушивать запросы

console.log(contoller.registration)

//Запрос на регистрацию  "POST"
router.post('/registration',  contoller.registration)

//Запрос на вход  "POST"
router.post('/login', contoller.login)

// Эксперимент на установку различных доступов - пользователь, админ, 
// или запрет на использования запроса не авторизованным пользователям
router.get('/users', contoller.getUsers )

module.exports = router
