import express from 'express';
import protectedRoute from '../middleware/protectedRoute.js';
import { getUserForSidebar } from '../contollers/user.contoller.js';

const router=express.Router();
router.get('/',protectedRoute,getUserForSidebar);
export default router;