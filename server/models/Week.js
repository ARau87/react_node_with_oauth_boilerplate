// Model representing a week
const mongoose = require('mongoose');
const { Schema } = mongoose;

const weekSchema = new Schema({
  name: String
});

mongoose.model('weeks', weekSchema);
