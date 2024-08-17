import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';

import authRoutes from './routers/auth.routes.js';
import messageRoutes from './routers/message.routes.js';
import userRoutes from './routers/user.routes.js';

import connectToMongoDB from './db/connectToMogoDB.js';


dotenv.config();
const port=process.env.PORT||3000;
const app=express();
// setting middlewares
app.use(express.json());
app.use(cookieParser());
// setting routes
app.use('/api/auth',authRoutes)
app.use('/api/messages',messageRoutes)
app.use('/api/users',userRoutes)

app.get('/',(req,res)=>{
    res.send('Hello World');
});
// for user login
app.listen(port,()=>{
    connectToMongoDB();
    console.log(`Server is running on port ${port}`);
});