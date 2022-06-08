const express = require("express");

const productsRoutes = require("./products");
const cartsRoutes = require("./carts");

const { Router } = express;

const router = new Router();

router.use("/products", productsRoutes);
router.use("/carts", cartsRoutes);

module.exports = router;