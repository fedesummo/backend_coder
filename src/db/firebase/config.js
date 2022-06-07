const admin = require("firebase-admin");

const serviceAccount = require("./ecommerce-37bce-firebase-adminsdk-xouf6-45b9a2d99d.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin;