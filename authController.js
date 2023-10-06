// Здесь идет описание всех функций по взаимодействию с пользователем
// регистрация, авторизация и получение пользователей


// Я создал "class" чтобы скомпоновать функции ниже в одну сущность
class authContoller {


    async registration(req, res) {
        try {

        } catch (e) {

        }  
    }


    async login(req, res) {
        try {

        } catch (e) {

        }
    }



    async getUsers(req, res) {

        try {
            res.json("server work)")
        } catch (e) {

        }
    }

}

// req, res - вопрос и ответ

module.exports = new authContoller()