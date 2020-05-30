const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const UserSchema = new Schema({

  firstName: {
    type: String,
    trim: true,
    required: "Please enter your first name"
  },

  lastName: {
    type: String,
    trim: true,
    required: "Please enter your last name"
  },

  username: {
    type: String,
    trim: true,
    required: "Username is Required"
  },

  password: {
    type: String,
    trim: true,
    required: "Password is Required",
    validate: [({ length }) => length >= 6, "Password should be longer."]
  },

  userCreated: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;
