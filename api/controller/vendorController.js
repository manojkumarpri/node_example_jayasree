const mongoose=require('mongoose');
const Vendor= require('../models/vendor');
exports.saveVendor=(req,res,next)=>{
const vendor=new Vendor({
    _id:mongoose.Types.ObjectId(),
    name:req.body.name,
    mobile:req.body.mobile,
    email:req.body.email,
    address:req.body.address

});
vendor.save()

.then(doc=>{
    doc
    res.status(200).json(doc)
})
.catch(err=>{
    res.status(500).json(err)
})
}