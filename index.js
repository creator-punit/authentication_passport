import express from "express";
<<<<<<< Updated upstream
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

=======
<<<<<<< Updated upstream
import {router as authRouter} from "./src/routes/authentication.route.js";
import {router as userRouter} from "./src/routes/user.route.js";
>>>>>>> Stashed changes

const app = express();
const port = 3000;
=======
import connectDB from "./src/config/database.js";
import dotenv from "dotenv"

dotenv.config({ path: "./env" });

const app = express();

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running on port: ", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log("MONGO_DB connection failed!!!", err);
  });

// app.use(express.urlencoded())
app.use(express.json({ limit: "16kb" }));
>>>>>>> Stashed changes

app.get("/", (req, res) => {
    res.send("Hello World!");
});

import {router as authRouter} from "./src/routes/authentication.route.js";
import { router as userRouter } from "./src/routes/user.route.js";

app.use("/auth", authRouter);
app.use("/user", userRouter);
