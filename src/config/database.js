import mongoose from "mongoose";

console.log(process.env.MONGODB_URI);
const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/chai_videotube`
    );
    console.log(`\n MongoDB connected !! DB HOST: ${connectionInstance}`);
  } catch (err) {
    console.error("MONGODB connection failed:", err);
    throw err;
  }
};

export default connectDB;
