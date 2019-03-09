const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const mongoose = require('mongoose');
const Crawl = require('./backend/models/Crawl');
const User = require('./backend/models/User')
const bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
//app.use(function(req, res) {
//    res.status(404).send({url: req.originalUrl + 'not found'})
//})

var crawlRoutes = require('./backend/routes/CrawlRoute');
var userRoutes = require('./backend/routes/UserRoute');

userRoutes(app);
crawlRoutes(app);

app.listen(port, () => console.log('Listening on port 5000'));

app.get('/express_backend', (req, res) => {
    res.send({express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT'});
    });
