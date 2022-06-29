var express = require('express');
var router = express.Router();

router.get('/', function(req,res,netx){
    res.render('servicios',{
        isServicios:true
    }); //view/servicios.hbs
})


module.exports = router;