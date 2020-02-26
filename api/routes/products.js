const express=require('express');
const router=express();
const mongoose=require('mongoose');
const Products=require('../models/products');

router.get('/',(req,res,next)=>{
  Products.find()
  .select('name quantity _id')
  .exec()
  .then(doc=>{
      const response={
          count:doc.length,
          products:doc.map(docs=>{
              return {
                  name:docs.name,
                  quantity:docs.quantity,
                  _id:docs._id,
                  Type:'GET',
                  url:'http://localhost:3000/products/' +docs._id
              }
          })
      }
    //   if(doc.length>=0){
      res.status(200).json(response)
   // }else {
     
   // }
  }).catch(err=>{
      res.status(500).json({
          error:err
      })
  })
});
router.post('/',(req,res,next)=>{
   // console.log(req.body.id);
    const products=new Products({
        _id:new mongoose.Types.ObjectId(),
        name:req.body.name,
        quantity:req.body.quantity,
    })
    products.save().then(result=>{
        console.log(result);
        res.status(200).json({
            message:'post method works',
            createdquantity:{
                name:result.name,
                quantity:result.quantity,
                _id:result._id,
                request:{
                    Type:'post',
                    url:'http://localhost:3000/products/'+result._id
                }
            }
        });
    }).catch(err=>{
        console.log(err);
        res.status(500).json({
            message:" Hari weds harini"
        })
        
     } );  
   
      
        
});
router.get('/:id',(req,res,next)=>{
    console.log(req.params.id)
    const id=req.params.id;
    Products.findById(id)
    .select('-id,name,quantity')
    .exec()
    .then(doc=>{
        
        console.log(doc);
       // if(doc){
        res.status(200).json({
       
            request:{
                product:doc,
                type:'GET',
                url:'http:localhost:3000/products/'
            }
            })
       
    
    }).catch(err=>{
        console.log(err);
        res.status(500).json({error:err})
        
    })
});
router.patch('/:id',(req,res,next)=>{
    const id=req.params.id;
const updateOps={}
for(const Ops of req.body){
    updateOps[Ops.propName]=ops.value
}
Products.update({_id:id},{$set:updateOps})
.exec()
.then(docs=>{
    res.status(200).json({
        message:docs
    })
})
.catch(err=>{
    res.status(500).json({
        error:err
    })
    
})
});
    router.delete('/:id',(req,res,next)=>{
        const id=req.params.id;
       Products.remove({_id:id})
    .exec()
    .then(docs=>{
        res.status(200).json({
            output:docs
        })
    })
    .catch(err=>{
        res.status(500).json({   error:err})
     
    })

        })



module.exports = router;