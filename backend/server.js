import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routers/auth.route.js';
dotenv.config();
const port=process.env.PORT||3000;
const app=express();
app.get('/',(req,res)=>{
    res.send('Hello World');
});
// for user login
app.use('/api/auth',authRoutes)
app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});