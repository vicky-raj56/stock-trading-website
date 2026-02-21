import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("mongodb is connected ");
  } catch (error) {
    console.log("mongodb dissconted:", error.message);
  }
};
export default connectDB;
