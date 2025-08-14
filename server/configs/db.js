import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("✅ Database Connected"));
    mongoose.connection.on("error", (err) => console.error("❌ DB Error:", err));
    console.log(process.env.MONGODB_URI)
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("❌ Could not connect to MongoDB:", error.message);
    process.exit(1);
  }
};

export default connectDB;
