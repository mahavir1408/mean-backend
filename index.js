const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const dbConfig = require('./configs/database.config');
const customerRoutes = require('./app/routes/customer.routes');

// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url).then(() => {
    console.log("Successfully connected to database!!");
}).catch((error) => {
    console.log('Could not connect to the database!!');
    process.exit();
});

app.use('/', customerRoutes);

var server = app.listen(3001, function(){
 console.log('Listenin on port 3001');
});