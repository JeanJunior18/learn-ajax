const mongoose = require('mongoose')

const formSchema = new mongoose.Schema({
    nome: {type: String},
    sobrenome: {type: String}
})

mongoose.model('Form', formSchema)