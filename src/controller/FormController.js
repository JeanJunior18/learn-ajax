const mongoose = require('mongoose')

const Form = mongoose.model('Form')

module.exports = {
    async cadastro(req,res){
        const Cadastro = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome
        }
        new Form(Cadastro).save().then(console.log('Salvo no DB'))
    },

    async ShowAll(req,res){
        console.log('Rota acessada com sucesso')
        // const all = await Form.find()
        // res.json(all)

    }
}