const FirebasedbContainer = require("./../containers/firebase");
const admin = require("./../db/firebase/config");

const CartsDaos = new FirebasedbContainer(admin, "carts");

module.exports = CartsDaos;
