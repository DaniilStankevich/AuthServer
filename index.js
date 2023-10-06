const { ServerApiVersion } = require('mongodb')
const { MongoClient } = require('mongodb')
const express = require('express')
const mongoose = require('mongoose')
const authRouter = require('./authRouter')
const { uri } = require('./config');


const PORT = process.env.PORT | 5000
const app = express()


// Заставляем сервер парcить json
app.use(express.json())

// Говорим нашему приложению прослушивать роутер
app.use('/auth', authRouter) // Первый параметр - url по которому наш роует будет "слушаться"


const client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  
  });

const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverApi: {
      version: ServerApiVersion.v1, // Версия API, согласно вашим требованиям
      strict: true,
      deprecationErrors: true,
    },
  };


const start = async () => {

    try {
        await mongoose.connect(uri, options)
        app.listen(PORT, () => console.log(`server stared on port ${PORT}`))
       // const users = client.db().collection('roles')
       // const use = await users.find({}).toArray()
       // console.log(use)
    } catch (e) {
        console.log(e)
    }
}

start()
