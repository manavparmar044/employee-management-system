import express from 'express';
import login from '../controller/authController.js';

const authRouter = express.Router();

// POST route for login
authRouter.post("/login", login);

export default authRouter;
