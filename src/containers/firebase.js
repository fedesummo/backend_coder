const admin = require("../db/firebase/config");

class FirebasedbContainer {
  constructor(admin, collection) {
    this.db = admin;
    this.collection = collection;
  }

  async getAllDocuments() {
    try {
      const docs = await this.db.collection(this.collection).get()
      return docs;
    } catch (err) {
      return err;
    }
  }
}

const cart = new FirebasedbContainer(admin, "carts")

cart.getAllDocuments().then