const ProductsModel = require("../models/Products");
const MongodbContainer = require("../containers/mongodb")

const products = new MongodbContainer(ProductsModel)

module.exports = products