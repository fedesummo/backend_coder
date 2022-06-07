class MongodbContainer {
  constructor(model) {
    this.model = model;
  }

  async getAllDocuments() {
    try {
      const docs = await this.model.find();
      return docs;
    } catch (err) {
      return err;
    }
  }

  async getDocumentById(id) {
    try {
      const doc = await this.model.findById(id);
      return doc;
    } catch (err) {
      return err;
    }
  }

  async saveDocument(data) {
    try {
      const doc = new this.model(data);
      const res = await doc.save();
      return res;
    } catch (err) {
      return err;
    }
  }

  async removeDocumentById(id) {
    try {
        const res = await this.model.findByIdAndRemove(id)
        return res
    } catch (err) {
        return err
    }
  }

  async updateDocumentById(id, data) {
      try {
          const res = await this.model.findByIdAndUpdate(id, data)
          return res
      } catch (err) {
        return err
      }
  }
}

module.exports = MongodbContainer;

// const products = new MongodbContainer(ProductsModel);
// products.getAllDocuments().then(data => console.log(data))
// products.getDocumentById("629f2a5bb30aa5aaa2345b02").then(data => console.log(data))
// products
//   .saveDocument({ title: "Sony Xperia X1",
//   description: "empty field",
//   category: "smartphones",
//   stock: 100,
//   price: 859.99 })
//   .then((data) => console.log(data));
// products.removeDocumentById("629f2a5bb30aa5aaa2345b02").then(data => console.log(data))
// products.updateDocumentById("629f338e90ad066206b802ce", {stock: 50}).then(data => console.log(data))
