const express=require('express');
const router=express();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'order fetch all data'
    });
});
router.get('/:id',(req,res,next)=>{
    id=req.params.id;
    if(id==='hari1'){
    res.status(200).json({
        message:"hari1",
        id:id
    })
    }
})
router.post('/',(req,res,next)=>{
    // console.log(req.body);
    const  product={
         name:req.body.name,
         price:req.body.price,
    }

    
    res.status(200).json({
        message:'order post all data',
        createdproduct:product
    });

});
router.patch('/:id',(req,res,next)=>{
    const id=req.params.id;

    res.status(200).json({
        message:'order',
        id:id

    })
});
router.delete('/:id',(req,res,next)=>{
    const id=req.params.id;
    res.status(200).json({

        message:'order',
        id:id

    });
});
router.put('/:id',(req,res,next)=>{
    const id=req.params.id;

    res.status(200).json({
        message:'order',
        id:id

    });
});

module.exports = router;