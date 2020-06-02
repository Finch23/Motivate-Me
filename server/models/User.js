const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
mongoose.promise = Promise;


const UserSchema = new Schema({

  firstName: { type: String, trim: true, unique: false, required: "Please enter your first name."},
  lastName: {  type: String, trim: true, unique: false, required: "Please enter your last name."},
  username: { type: String, unique: true, required: false },
  password: { type: String, unique: false, required: false },
  joinGoal : [{type: Schema.Types.ObjectId, ref: 'Goal' }], 
  userCreated: {type: Date, default: Date.now}
});

// Define schema methods
// userSchema.methods = {
// 	checkPassword: function(inputPassword) {
// 		return bcrypt.compareSync(inputPassword, this.password);
// 	},
// 	hashPassword: plainTextPassword => {
// 		return bcrypt.hashSync(plainTextPassword, 10);
// 	}
// };

// // Define hooks for pre-saving
// userSchema.pre('save', function(next) {
// 	if (!this.password) {
// 		console.log('No password provided!');
// 		next();
// 	} else {
// 		this.password = this.hashPassword(this.password);
// 		next();
// 	}
// })

const User = mongoose.model("User", UserSchema);

module.exports = User;
