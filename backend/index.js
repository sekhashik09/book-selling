
import express from 'express';
import dotenv from "dotenv"
import  {connectDB } from './dbconfig/connectDB.js';
import authRoutes from './routes/auth.route.js'
import bookRoutes from './routes/course.route.js'
import cookieParser from 'cookie-parser';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000


app.use(express.json())  //allows us to parse incoming JSON requests : req.body
app.use(cookieParser()); //allows us to parse cookies
// Define the routes

app.use("/api/auth",authRoutes)
app.use("/api",bookRoutes)

app.listen(PORT,(req, res) =>{
    connectDB()
    console.log(`Server running on port ${PORT}`);
})
