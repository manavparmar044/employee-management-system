import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRouter from "./routes/auth.js";
import departmentRouter from "./routes/department.js"
import connectToDB from './database/database.js';

dotenv.config();
connectToDB();  // Connect to database

const app = express();

// Enable CORS for frontend
app.use(cors({
    origin: 'http://localhost:5173', // Frontend URL
    methods: 'GET,POST,PUT,DELETE',
    allowedHeaders: 'Content-Type,Authorization',
    credentials: true
}));

app.use(express.json());  // Middleware to parse JSON request body

// Use authentication routes
app.use("/api/auth", authRouter);
app.use("/api/department", departmentRouter);

// Start server
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
