// backend/database/dbConnection.js

import mongoose from "mongoose";

const dbConnection = async () => {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URI);
    console.log(`✅ Database Connected: ${connection.host}`);
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error);
    process.exit(1); // Stop server if DB fails
  }
};

export default dbConnection;
