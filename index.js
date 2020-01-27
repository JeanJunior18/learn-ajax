const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Iniciando Apps
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Iniciando Banco de dados
mongoose.connect('mongodb://localhost:27017/learnajax',{
    useNewUrlParser:true, 
    useUnifiedTopology:true, 
    useFindAndModify:false
})

// Chamando models
require('./src/model/form')

// Routes
const router = require('./src/routes')
app.use('/', router)


app.listen(3300)