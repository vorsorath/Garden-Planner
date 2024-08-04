const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  gardenPlan: { type: Array, default: [] },
});

module.exports = mongoose.model('User', UserSchema);
