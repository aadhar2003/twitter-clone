const router=require('express').Router();
const SignUpHandler=require('../controllers/SignUpHandler');
router.get('/',SignUpHandler.getLog);
router.post('/',SignUpHandler.postLog);

module.exports=router;