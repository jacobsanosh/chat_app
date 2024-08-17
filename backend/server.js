import express from 'express';
import dotenv from 'dotenv';
import authRoutes from './routers/auth.routes.js';
import messageRoutes from './routers/message.routes.js';
import connectToMongoDB from './db/connectToMogoDB.js';
import cookieParser from 'cookie-parser';


dotenv.config();
const port=process.env.PORT||3000;
const app=express();
// setting middlewares
app.use(express.json());
app.use(cookieParser());
// setting routes
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.get('/',(req,res)=>{
    res.send('Hello World');
});
// for user login
app.listen(port,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${port}`);
});