const express=require('express');
const vendorController=require('../controller/vendorController');
const router=express.Router();

//controller
router.post('/',vendorController.saveVendor);

module.exports=router;