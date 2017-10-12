// Express server of the weekly schedule application
const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 5005;

const app = express();

// Provide static files for the client
app.use(express.static(path.join(__dirname + '/client/public')));

// Setup database connection and data models
require('./server/services/databaseService');

// Setup the services
require('./server/services/passportService');

//Middleware
require('./server/middleware')(app);

// Route handlers
require('./server/routes/baseRoutes')(app);
require('./server/routes/authRoutes')(app);
require('./server/routes/apiRoutes')(app);

app.listen(PORT);
