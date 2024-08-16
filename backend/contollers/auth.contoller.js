import User from '../models/user.model.js';
import bcrypt from 'bcryptjs';
import generateJWTtoken from '../utils/generateJWTtoken.js';
export const signupUser=async(req,res)=>{
    try{

        const  {fullName,username,password,confirmPassword,gender}=req.body; 
        if (password!=confirmPassword){
            return res.status(400).json({message:"Password and Confirm Password do not match"})
        }
        const userExist=await User.findOne({username});
        if(userExist){
            return res.status(400).json({message:"User already exists"});
        }
        const boyPics=`https://avatar.iran.liara.run/public/boy/?username=${username}`;
        const girlPics=`https://avatar.iran.liara.run/public/girl/?username=${username}`;
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(password,salt);
        const new_user=await User.create({
            fullName,
            username,
            password:hashpassword,
            gender,
            profilePic:gender==='male' ? boyPics : girlPics
        });
        // for generating cookies
        generateJWTtoken(new_user._id,res);
        await new_user.save();
        return res.status(201).json({_id:new_user._id,fullName:new_user.fullName,username:new_user.username,profilePic:new_user.profilePic});   
    }
    catch(err){
        res.status(500).json({message:"Internal Server Error "});
        console.log('error during signup controller:',err);
    }

}
export const loginUser=(req,res)=>{
    res.send("on login page")
}
export const logoutUser=(req,res)=>{
    res.send("on logout page")
}