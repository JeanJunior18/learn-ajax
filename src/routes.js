const express = require('express');
const path = require('path');

const router = express.Router();

router.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+'/view/index.html'));
});
router.post('/user',(req,res)=>{
    console.log('Formulario recebido')
    console.log(req.body)
})

module.exports = router;