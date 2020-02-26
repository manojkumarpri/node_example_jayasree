    const express=require('express');
    const router =express.Router();
    
    /* controller */
    const customerController = require('../controller/customerController');

    router.post('/',customerController.saveCustomer);
    router.get('/',customerController.getAllCustomer);
    router.delete('/:custid',customerController.deletecustomer);
    router.put('/:custid',customerController.update);
    router.get('/:custid',customerController.findOne);
    module.exports=router;
    