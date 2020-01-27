const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/view/index.html'));
});

const Form = require('./controller/FormController')
router.post('/user', Form.cadastro)

module.exports = router;