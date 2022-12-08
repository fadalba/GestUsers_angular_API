const mongoose = require("mongoose");
const Schema = mongoose.Schema;

let Book = new Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    tel: {
      type: Number,
    },
    profil: {
      type: String,
    },
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", Book);
