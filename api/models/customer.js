const mongoose=require('mongoose'); 
const customerSchema=new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    name:String,
    mobilenumber:String,        
    email:String,
    gender:String,
    address:String
})

module.exports=mongoose.model('Customer',customerSchema)