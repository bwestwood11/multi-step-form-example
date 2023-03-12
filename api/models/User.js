const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
  username: String,
  email: { type: String, unique: true },
  password: String,
  firstName: String,
  lastName: String,
  address: String,
  phone: String,
  food: String,
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
