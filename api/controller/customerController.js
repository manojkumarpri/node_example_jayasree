const mongoose=require('mongoose');
const Customer=require('../models/customer');
exports.saveCustomer=(req,res,next)=>{

    const customer =  new Customer({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        mobilenumber:req.body.mobilenumber,
        email:req.body.email,
        gender:req.body.gender,
        address:req.body.address
    });
    customer.save()
    .then(doc=>{
        res.status(200).json(doc);
    })
    .catch(err=>{
        res.status(500).json(err);
    })
};


exports.getAllCustomer=(req,res,next)=>{
    Customer.find()
    .exec()
    .then(doc=>{
        console.log(doc);
        res.status(200).json(doc); 
    })
    .catch(error=>{
        res.status(500).json(error);
    });
}

    exports.deletecustomer=(req,res)=>{
        Customer.findByIdAndDelete({_id:req.params.custid}).exec()
        .then(doc=>{
            console.log(doc);
            res.status(200).json(doc); 
        })
        .catch(error=>{
            res.status(500).json(error);
        });
    };

exports.update = (req, res) => {
        // Validate Request
        // Find user and update it with the request body
        console.log("calle update")
           Customer.findOneAndUpdate({_id:req.params.custid}, {
            //Id: req.body.Id || "there is no ID for this order!", 
           // _id:new mongoose.Types.ObjectId(),
            name:req.body.name,
            mobilenumber:req.body.mobilenumber,
            email:req.body.email,
            gender:req.body.gender,
            address:req.body.address}, {new: true})
        .then(user => {
            if(!user) {
                return res.status(404).send({
                    message: "user not found with id " + req.params.custid
                });
            }
            res.send(user);
        }).catch(err => {
            if(err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "user not found with id " + req.params.custid
                });                
            }
            return res.status(500).send({
                message: "Error updating user with id " + req.params.custid
            });
        });
    };


    // Find a single order with a orderId
exports.findOne = (req, res) => {
    console.log("calle update")
    Customer.findOne({_id:req.params.custid})
    .then(user => {
        if(!user) {
            return res.status(404).send({
                message: "user not found with id " + req.params.custid
            });            
        }
        res.send(user);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "user not found with id " + req.params.custid
            });                
        }
        return res.status(500).send({
            message: "Error retrieving user with id " + req.params.custid
        });
    });
};