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
      type: Number,
    },
    tel: {
        type: String,
      },
    profil:{
        type: String,
      } ,
    password:{
        type: String,
      }   
  },
  {
    collection: "books",
  }
);

module.exports = mongoose.model("Book", Book);