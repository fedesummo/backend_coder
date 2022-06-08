const express = require("express");
const ProductsDao = require("../daos/products");
const CartsDaos = require("./../daos/carts");

const { Router } = express;

const router = new Router();

// Get all carts.
router.get("/", (req, res) => {
  CartsDaos
    .getAllDocuments()
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Get cart by ID.
router.get("/:id", (req, res) => {
  const { id } = req.params;
  CartsDaos
    .getDocumentById(id)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Get cart products by cart ID.
router.get("/:id/products", (req, res) => {
  const { id } = req.params;
  CartsDaos
    .getDocumentById(id)
    .then((data) => res.json(data[0].products))
    .catch((err) => console.log(err));
});

// Post a new empty cart.
router.post("/", (req, res) => {
  const cart = {
    products: [],
  };
  CartsDaos
    .saveDocument(cart)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Add product to cart by cart ID.
router.post("/:cartId/products", (req, res) => {
  const { cartId } = req.params;
  const { productId } = req.body;
  ProductsDao
    .getDocumentById(productId)
    .then((productData) => {
      CartsDaos
        .getDocumentById(cartId)
        .then((data) => {
          const cartData = data[0];
          delete cartData.id;
          cartData.products.push(productData[0]);
          CartsDaos
            .updateDocumentById(cartId, cartData)
            .then((data) => res.json(data))
            .catch((err) => console.log(err));
        })
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

// Delete cart product by cart ID and product ID.
router.delete("/:cartId/products/:productId", (req, res) => {
  const { cartId, productId } = req.params;
  CartsDaos
    .getDocumentById(cartId)
    .then((data) => {
      const { products: productsList } = data[0];
      const index = productsList.findIndex(
        (element) => element.id == productId,
      );
      productsList.splice(index, 1);
      CartsDaos
        .updateById(cartId, data[0])
        .then((resp) => res.json(resp))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

// Delete cart by ID.
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  CartsDaos
    .removeDocumentById(id)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

module.exports = router;
