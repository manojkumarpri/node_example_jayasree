const express=require('express');
const router = express.Router();

/* controller */
const loginController = require('../controller/loginController');

router.post('/',loginController.loginUser);
router.get('/',loginController.getAllloginusr);
// router.delete('/:studid',loginController.deleteStudent);
// router.get('/:studid', loginController.findonestudent);

// router.put('/:studid', loginController.update);
module.exports=router;