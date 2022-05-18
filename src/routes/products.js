const express = require("express");
const { products_db } = require("../db/db");
const privateRoute = require("../middlewares/privateRoute");

const { Router } = express;

const router = new Router();

// Get all products.
router.get("/", (req, res) => {
  products_db
    .getAll()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Get product by ID.
router.get("/:id", (req, res) => {
  const { id } = req.params;
  products_db
    .getById(id)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Post a new product.
router.post("/", privateRoute, (req, res) => {
  const product = req.body;
  product.timestamp = Date.now()
  products_db
    .save(product)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Update product by ID.
router.put("/:id", privateRoute, (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  products_db
    .updateById(id, payload)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Delete product by ID.
router.delete("/:id", privateRoute, (req, res) => {
  const { id } = req.params;
  products_db
    .removeById(id)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
