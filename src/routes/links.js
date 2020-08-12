const express = require('express');
const router = express.Router();


router.get('/nosotros',(req,res)=>{
    res.render('links/nosotros');
});


router.get('/contacto',(req,res)=>{
    res.render('links/contacto');
});





module.exports = router;