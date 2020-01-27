const express = require('express')


const app = express()

// Routes
const router = require('./src/routes')
app.use('/', router)


app.listen(3300)