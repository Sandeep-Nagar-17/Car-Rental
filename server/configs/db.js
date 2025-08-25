// import mongoose from "mongoose";

// const connectDB = async ()=>{
//     try {
//         mongoose.connection.on('connected', ()=> console.log("Database Connected"));
//         await mongoose.connect(`${process.env.MONGODB_URI}/Car-Rental`)
//     } catch (error) {
//         console.log(error.message);
//     }
// }

// export default connectDB;

import mongoose from "mongoose";

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => console.log("Database Connected"));
    await mongoose.connect(`${process.env.MONGODB_URI}/Car-Rental`, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error("Database connection error:", error.message);
    process.exit(1);
  }
};

export default connectDB;
