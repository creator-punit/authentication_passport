import express from "express";
import connectDB from "./src/config/database.js";
import dotenv from "dotenv"

dotenv.config({ path: "./env" });
console.log(process.env.PORT);
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running on port: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MONGO_DB connection failed!!!", err);
});


const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

import {router as authRouter} from "./src/routes/authentication.route.js";
import { router as userRouter } from "./src/routes/user.route.js";

app.use("/auth", authRouter);
app.use("/user", userRouter);
