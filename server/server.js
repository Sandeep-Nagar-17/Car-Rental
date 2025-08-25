// import express from "express";
// import "dotenv/config";
// import cors from "cors";
// import connectDB from "./configs/db.js";
// import userRouter from "./routes/userRoutes.js";
// import ownerRouter from "./routes/ownerRoutes.js";
// import bookingRouter from "./routes/bookingRoutes.js";

// // Initialize Express App
// const app = express()

// // Connect Database
// await connectDB()


// // Middleware
// app.use(cors());
// app.use(express.json());

// app.get('/', (req, res)=> res.send("Server is running"))
// app.use('/api/user', userRouter)
// app.use('/api/owner', ownerRouter)
// app.use('/api/bookings', bookingRouter)

// const PORT = process.env.PORT || 3000;
// app.listen(PORT, ()=> console.log(`Server running on port ${PORT}`))

import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) => res.send("Server is running"));
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);

// Connect to DB and Start Server
const PORT = process.env.PORT || 3000;

const startServer = async () => {
  await connectDB();
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
};

startServer();
