const express = require("express");
const { products_db, carts_db } = require("../db/db");

const { Router } = express;

const router = new Router();

// Post a new empty cart.
router.post("/", (req, res) => {
  const cart = {
    timestamp: Date.now(),
    products: [],
  };
  carts_db
    .save(cart)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Get cart by ID.
router.get("/:id", (req, res) => {
  const { id } = req.params;
  carts_db
    .getById(id)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Delete cart by ID.
router.delete("/:id", (req, res) => {
  const { id } = req.params;
  carts_db
    .removeById(id)
    .then((data) => res.json(data))
    .catch((err) => console.log(err));
});

// Get cart products by cart ID.
router.get("/:id/products", (req, res) => {
  const { id } = req.params;
  carts_db
    .getById(id)
    .then((data) => res.json(data[0].products))
    .catch((err) => console.log(err));
});

// Add product to cart by cart ID.
router.post("/:cartId/products", (req, res) => {
  const { cartId } = req.params;
  const { productId } = req.body;
  products_db
    .getById(productId)
    .then((productData) => {
      carts_db
        .getById(cartId)
        .then((data) => {
          const cartData = data[0];
          delete cartData.id;
          cartData.products.push(productData[0]);
          carts_db
            .updateById(cartId, cartData)
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
  carts_db
    .getById(cartId)
    .then((data) => {
      const { products: productsList } = data[0];
      const index = productsList.findIndex(
        (element) => element.id == productId,
      );
      productsList.splice(index, 1);
      carts_db
        .updateById(cartId, data[0])
        .then((resp) => res.json(resp))
        .catch((err) => console.log(err));
    })
    .catch((err) => console.log(err));
});

module.exports = router;
