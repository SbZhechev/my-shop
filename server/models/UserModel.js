const mongoose = require('mongoose');

const { Schema, model } = mongoose;

const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

userSchema.statics.findByEmail = function(email) {
  return this.findOne({ email });
};

module.exports = model('User', userSchema);