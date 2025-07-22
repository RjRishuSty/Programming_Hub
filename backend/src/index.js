import express from "express";
import dotenv from "dotenv";
import cors from 'cors';
import cookieParser from "cookie-parser";
import connectDB from "./lib/connectDB.js";
import authRoutes from "./routes/auth.routes.js";
import blogRouters from "./routes/blog.routes.js";

dotenv.config();
const app = express();
const PORT = process.env.PORT || 8081;

//! Global MiddleWare.........
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:5173", // frontend URL
    credentials: true, // Required if you're sending cookies
  })
);
app.use("/api/auth", authRoutes);
app.use('/api/blog', blogRouters);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  connectDB();
});
