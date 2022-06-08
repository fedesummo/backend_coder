const ProductsModel = require("../models/Products");
const MongodbContainer = require("../containers/mongodb");

const ProductsDao = new MongodbContainer(ProductsModel);

module.exports = ProductsDao;
