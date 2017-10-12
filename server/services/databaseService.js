// Setting up the database and data models
const mongoose = require('mongoose');
const keys = require('../config/keys');

mongoose.connect(keys.mongoURI);

// Setting up the models
require('../models/User');
require('../models/Week');
require('../models/Meal');
