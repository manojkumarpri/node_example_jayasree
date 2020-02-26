const mongoose=require('mongoose');
const Login =require('../models/login');

exports.loginUser=(req,res,next)=>{

    const stud= new Login({
        _id:new mongoose.Types.ObjectId(),
        username:req.body.username,
        password:req.body.password
    });
    stud.save()
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
};

exports.getAllloginusr=(req,res,next)=>{
    Login.find()
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc); 
    })
    .catch(error=>{
        res.status(500).json(error);
    });
}