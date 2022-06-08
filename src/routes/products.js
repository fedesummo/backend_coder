const express = require("express");
// const privateRoute = require("../middlewares/privateRoute");
const ProductsDaos = require("./../daos/products");

const { Router } = express;

const router = new Router();

// Get all products.
router.get("/", (req, res) => {
  ProductsDaos
    .getAllDocuments()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Get product by ID.
router.get("/:id", (req, res) => {
  const { id } = req.params;
  ProductsDaos
    .getDocumentById(id)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Post a new product.
router.post("/", (req, res) => {
  const product = req.body;
  ProductsDaos
    .saveDocument(product)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Update product by ID.
router.put("/:id", (req, res) => {
  const { id } = req.params;
  const payload = req.body;
  ProductsDaos
    .updateDocumentById(id, payload)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Delete product by ID.
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  ProductsDaos
    .removeDocumentById(id)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
