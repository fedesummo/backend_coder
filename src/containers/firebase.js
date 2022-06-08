class FirebasedbContainer {
  constructor(admin, collection) {
    this.db = admin.firestore();
    this.collection = collection;
  }

  async getAllDocuments() {
    try {
      const query = this.db.collection(this.collection);
      const queryDocs = await query.get();
      const docs = queryDocs._docs().map((doc) => doc.data());
      return { status: 200, data: docs };
    } catch (err) {
      return { status: 400, data: err };
    }
  }

  async getDocumentById(id) {
    try {
      const query = this.db.collection(this.collection).doc(id);
      const queryDoc = await query.get();
      const doc = queryDoc.data();
      return { status: 200, data: doc };
    } catch (err) {
      return { status: 400, data: err };
    }
  }

  async saveDocument(doc) {
    try {
      const query = this.db.collection(this.collection);
      const queryDoc = await query.add(doc);
      return { status: 201, msg: "Document saved" };
    } catch (err) {
      return { status: 400, data: err };
    }
  }

  async updateDocumentById(id, data) {
    try {
      const query = this.db.collection(this.collection).doc(id);
      const queryDoc = await query.update(data);
      return { status: 200, msg: "Document updated" };
    } catch (err) {
      return { status: 400, data: err };
    }
  }

  async removeDocumentById(id) {
    try {
      const query = this.db.collection(this.collection).doc(id);
      const queryDoc = await query.delete();
      return { status: 200, msg: "Document removed" };
    } catch (err) {
      return { status: 400, data: err };
    }
  }
}

module.exports = FirebasedbContainer;
