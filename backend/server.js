import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.route.js"
import userRoutes from "./routes/user.route.js"
import messageRoutes from "./routes/message.route.js"

import connectToMongoDB from "./db/connecttoMongoDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);
app.use("/api/users",userRoutes);

/* app.get("/",(req , res) => {
    // root route http://localhost:5000/
    res.send(`Vanakam da mapla ${PORT} la irundhu`);
});
 */

app.listen(PORT,() => {
    connectToMongoDB();
    console.log(`Server is running on the port ${PORT}`);
});