const mongoose=require('mongoose');
 const vendorSchema=new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    mobile:Number,
    email:String,
    address:String
})
module.exports=mongoose.model('vendor',vendorSchema)
