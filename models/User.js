const mongoose = require("mongoose");
const { Schema } = mongoose;

// Create Schema
const UserSchema = new Schema({
  name: { type: String, require: true },
  email: { type: String, required: true },
  password: { type: String, require: true },
  avatar: { type: String },
  date: { type: Date, default: Date.now }
});

module.exports = User = mongoose.model("users", UserSchema);
