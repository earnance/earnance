/**
 * The ConnectDB function connects to a MongoDB database using the provided URL.
 */
import mongoose from "mongoose";

export const ConnectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("MongoDB connected successfully");
  } catch (error) {
    console.log("Error in connecting db: " + error);
  }
};
  