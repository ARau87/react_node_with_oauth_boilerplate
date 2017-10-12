// Model representing a meal
const mongoose = require('mongoose');
const { Schema } = mongoose;

const mealSchema = new Schema({
  timeOfDay: String,
  name: String,
  points: Number
});

mongoose.model('meals', mealSchema);
