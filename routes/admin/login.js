var express = require('express');
var router = express.Router();

router.get('/', function(req,res,netx){
    res.render('admin/login',{
        layout:'admin/layout' // admin/layout.hbs
    }); //view/galeria.hbs
})


module.exports = router;