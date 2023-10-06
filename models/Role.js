const {Schema, model}  = require('mongoose')

//Какие поля будут у user
const Role = new Schema({    
    value: {
            type: String,  
            unique: true,
            default: "USER"   // Дефолтная роль
                            },

})

module.exports = model("Role", Role ) // Название модели, схема
