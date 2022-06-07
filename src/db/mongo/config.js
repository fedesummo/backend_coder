const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_DB_URL);

mongoose.connection.on("open", () =>
  console.log("Succesfully connected to database"),
);

mongoose.connection.on("error", () =>
  console.log("Error on database connection"),
);