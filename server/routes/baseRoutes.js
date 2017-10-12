// This module contains the basic routes
const path = require('path');

module.exports = app => {

  app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname + '../../../client/index.html'));
  });

}
