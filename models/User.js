const {Schema, model}  = require('mongoose')


// Описание того, как пользователь будет храниться в БД
const User = new Schema({    //Какие поля будут у user

    username: {
              type: String,  
              unique: true,
              required: true, 
                            },

    password: {
              type: String,  
              required: true, 
                            },

    roles: [{ type: String, 
              ref: 'Role'   }]


})

module.exports = model("User", User ) // Название модели, схема
//Более подробно на mongoose