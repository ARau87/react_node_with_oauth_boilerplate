// This module contains the routes of the REST api
const path = require('path');
const mongoose = require('mongoose');

const Week = mongoose.model('weeks');


module.exports = app => {

  app.get('/api/weeks', (req,res) => {
     if(req.user){
       res.status(200).send('Authorized!');
     }
     else {
       res.status(401).send('ERROR 401: Unauthorized!')
     }
  });

}
