import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Mongoose DB Connection Successfully!");
  } catch (error) {
    console.log("DB Connection Failed!", error.message);
  }
};


export default connectDB;