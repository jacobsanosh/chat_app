import express from 'express';
import { sendMessage } from '../contollers/message.contoller.js';
import protectedRoute from '../middleware/protectedRoute.js';
const router=express.Router();
router.post('/send/:id',protectedRoute,sendMessage);
export default router;