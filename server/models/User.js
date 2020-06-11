const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose.promise = Promise;


const UserSchema = new Schema({

  firstName: { type: String, trim: true, unique: false, required: "Please enter your first name."},
  lastName: {  type: String, trim: true, unique: false, required: "Please enter your last name."},
  githubHandle: { type: String, unique: true, required: false },
  username: { type: String, unique: true, required: false },
  password: { type: String, unique: false, required: false },
  joinGoal : [{type: Schema.Types.ObjectId, ref: 'Goal' }], 
  userCreated: {type: Date, default: Date.now}
});


const User = mongoose.model("User", UserSchema);

module.exports = User;
