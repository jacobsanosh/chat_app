import mongoose from "mongoose";
const connectToMongoDB = async () => {
    try{
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('Connected to MongoDB');
    }
    catch(err){
        console.log('Error:',err);
    }
}
export default connectToMongoDB;