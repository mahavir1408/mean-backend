const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const mongoose = require('mongoose');
const dbConfig = require('./configs/database.config');
const customerRoutes = require('./app/routes/customer.routes');

// create express app
const app = express();

app.set('port', process.env.PORT || 3001);
app.set('hostname', process.env.HOSTNAME || 'localhost');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());

mongoose.Promise = global.Promise;

mongoose.connect(dbConfig.url).then(() => {
    console.log("Successfully connected to database!!");
    console.log("Using host:", app.get('hostname'));
    console.log("Using port:", app.get('port'));
}).catch((error) => {
    console.log('Could not connect to the database!!');
    process.exit();
});

require('./app/routes/customer.routes')(app);

/*
 * start server
 * */
const server = http.createServer(app);
server.listen(app.get('port'));
module.exports = server;