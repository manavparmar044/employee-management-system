import express from 'express';
import {login} from '../controller/authController.js';
import {verify} from '../controller/authController.js';
import verifyUser from '../middlewares/authMiddleware.js';

const authRouter = express.Router();

// POST route for login
authRouter.post("/login", login);
authRouter.post("/verify", verifyUser,verify);

export default authRouter;
