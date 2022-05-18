const Container = require("../classes/container");
const path = require("path");

const products_db = new Container(
  path.join(__dirname + "/../../public/data/products.json"),
);

const carts_db = new Container(
  path.join(__dirname + "/../../public/data/carts.json"),
);

module.exports = { products_db, carts_db };
