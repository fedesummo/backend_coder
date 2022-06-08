const express = require("express");
require("dotenv").config();

const privateRoute = require("./src/middlewares/privateRoute")
const router = require("./src/routes/index");

const app = express();

app.use(express.json());

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.use("/api", privateRoute, router);

app.get("*", function (req, res) {
  res.json({ status: 404, msg: "Not found" });
});
