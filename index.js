import express from "express";
import router from "./routes/authentication.router.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/auth", router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
