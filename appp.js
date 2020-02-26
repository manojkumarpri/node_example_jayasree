const express=require('express');
const app=express();
const cors=require('cors');
const bodyparser=require('body-parser');
const mongoose=require('mongoose');
const productroutes=require('./api/routes/products'); 
const orderroutes=require('./api/routes/order');
const customerRoutes=require('./api/routes/customer');
const vendorRoutes=require('./api/routes/vendor');
const studentRoutes=require('./api/routes/student');
const loginRoutes=require('./api/routes/login');

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
mongoose.connect('mongodb://localhost:27017/customer'),{useMongoClient:true}
app.use(cors());
app.use((req,res,next)=>{
res.header('Access-Control-Allow-Orgin',"*")
res.header("Access-Control-Allow-Header","Orgin,X-Requested-with,Content-Type,Accept,Authorization")
// if(req.method==="OPTIONS"){
//     res.header('Access-Control-Allow-Method','PUT,POST,GET,PATCH,DELETE')
//     return res.status(200)
//     .json({});
// }
next();
}); 
app.use('/products',productroutes);
app.use('/order',orderroutes);
app.use('/api/customer',customerRoutes);
app.use('/api/vendor',vendorRoutes);
app.use('/api/student',studentRoutes);
app.use('/api/login',loginRoutes);
app.use((req,res,next)=>{
const error = new Error('not found');
error.status=404;
next(error);
});
// app.use((error,req,res,next)=>{
//     res.status(error.status || 500);
//     res.json({
//         error:{

//             message:error.message
//         }
//     })
// })

module.exports = app;