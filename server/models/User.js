// Model representing a user of the application
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleId: String
});

mongoose.model('users', userSchema);
