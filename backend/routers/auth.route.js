import express from "express";
const router=express.Router();
import { loginUser,logoutUser,signupUser } from "../contollers/auth.contoller.js";
router.post('/login',loginUser);
router.post('/signup',signupUser);
router.post('/logout',logoutUser);
export default router;