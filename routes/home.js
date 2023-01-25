const router=require('express').Router();

const homeHandler=require('../controllers/homeHandler');
router.get('/',homeHandler.getHome);
module.exports=router;