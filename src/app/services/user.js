const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');


let User = new Schema(
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
    collection: "users",
  }
);

//module.exports = mongoose.model("User", User);

User.plugin(uniqueValidator, { message: 'Email already in use.' });
module.exports = mongoose.model('User', User);


