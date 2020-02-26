const mongoose=require('mongoose'); 
const studSchema = new mongoose.Schema({
    _id:mongoose.Types.ObjectId,
    studnumberid:String,
    studentname:String,
    password:String,
    mobilenumber:String,
    email:String,
    gender:String,
    address:String
})

module.exports=mongoose.model('Student',studSchema)