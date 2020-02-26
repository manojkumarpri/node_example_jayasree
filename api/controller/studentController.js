const mongoose=require('mongoose');
const Stud =require('../models/student');
exports.saveCustomer=(req,res,next)=>{

    const stud= new Stud({
        _id:new mongoose.Types.ObjectId(),
        studnumberid:req.body.studnumberid,
        studentname:req.body.studentname,
        password:req.body.password,
        mobilenumber:req.body.mobilenumber,
        email:req.body.email,
        gender:req.body.gender,
        address:req.body.address
    });
    stud.save()
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
};


exports.getAllCustomer=(req,res,next)=>{
    Stud.find()
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc); 
    })
    .catch(error=>{
        res.status(500).json(error);
    });
}

exports.deleteStudent=(req,res)=>{
    Stud.findByIdAndDelete({_id:req.params.studid}).exec()
    .then(doc =>{
        console.log(doc);
        res.status(200).json(doc);
    })
    .catch(error =>{
    res.status(500).json(error);
    });
};

exports.findonestudent=(req,res) =>{
    Stud.findOne({_id:req.params.studid})
    .then(doc =>{

        console.log(doc);
        if(!doc){
            return res.status(404).send({
                message:"student not found with id " + req.params.studid
            })
        }
        res.send(doc);
      //  res.status(200).json(doc);
    })
    .catch(error =>{
        if(error.kind === "objectId"){
            return res.status(404).send({
                message:"student not found width id and in cache" + req.params.studid
            })
        }
        return res.status(500).send({
            message : "error retriving with id" + req.params.studid
        });
    });
};

exports.update=(req, res)=>{
Stud.findByIdAndUpdate({_id:req.params.studid},{
    studnumberid:req.body.studnumberid,
    studentname:req.body.studentname,
    password:req.body.password,
    mobilenumber:req.body.mobilenumber,
    email:req.body.email,
    gender:req.body.gender,
    address:req.body.address
},{new: true})
.then(doc =>{
    if(!doc){
        return res.status(404).send({
            message:"student not found with id" + req.params.studid
        })
    }
    res.send(doc);
}).catch(err => {
    if(err.kind === 'ObjectId') {
        return res.status(404).send({
            message: "user not found with id " + req.params.studid
        });                
    }
    return res.status(500).send({
        message: "Error updating user with id " + req.params.custid
    });
});

}