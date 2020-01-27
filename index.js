const express = require('express')
const bodyParser = require('body-parser')


const app = express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

// Routes
const router = require('./src/routes')
app.use('/', router)


app.listen(3300)