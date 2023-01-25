const router=require('express').Router();

const LogInHandler=require('../controllers/logInHandler');
router.get('/',LogInHandler.getlog);
router.post('/',LogInHandler.postLog);
module.exports=router;