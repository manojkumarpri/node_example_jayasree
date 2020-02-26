const express=require('express');
const router = express.Router();

/* controller */
const studentController = require('../controller/studentController');

router.post('/',studentController.saveCustomer);
router.get('/',studentController.getAllCustomer);
router.delete('/:studid',studentController.deleteStudent);
router.get('/:studid', studentController.findonestudent);

router.put('/:studid', studentController.update);
module.exports=router;