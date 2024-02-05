import express from "express";
import {router as authRouter} from "./src/routes/authentication.route.js";
import {router as userRouter} from "./src/routes/user.route.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", authRouter);
app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
