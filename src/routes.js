const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/cadastro',(req,res)=>{
    res.sendFile(path.join(__dirname+'/view/index.html'));
});

const Form = require('./controller/FormController')
router.get('', (req,res)=>{
    res.sendFile(path.join(__dirname+'/view/home.html'))
})

router.post('/user', Form.cadastro)
router.post('/show', Form.ShowAll)

module.exports = router;