import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routers/auth.route.js';
import { connect } from 'http2';
import connectToMongoDB from './db/connectToMogoDB.js';
dotenv.config();
const port=process.env.PORT||3000;
const app=express();
app.use(express.json());
app.use('/api/auth',authRoutes)
app.get('/',(req,res)=>{
    res.send('Hello World');
});
// for user login
app.listen(port,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${port}`);
});