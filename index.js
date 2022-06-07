const express = require("express");
require('dotenv').config();
const productsRoutes = require("./src/routes/products");
const cartRoutes = require("./src/routes/carts");

const app = express();

app.use(express.json());
app.use(express.static("./public"));

const port = process.env.PORT || 8080;

app.listen(port, () => console.log(`Server running on port: ${port}`));

app.use("/api/products", productsRoutes);
app.use("/api/carts", cartRoutes);

app.get("*", function (req, res) {
  res.json({ code: 404, msg: "Esta ruta no está definida" });
});
