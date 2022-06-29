var express = require('express');
var router = express.Router();

router.get('/', function(req,res,netx){
    res.render('nosotros',{
        isNosotros:true
    }); //view/nosotros.hbs
})


module.exports = router;