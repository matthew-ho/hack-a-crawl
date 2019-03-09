'use strict';

var mongoose = require('mongoose'),
    Crawl = mongoose.model('Crawl');

var api = require('../../maps/api_map');

exports.getAllCrawls = function(req, res) {
    Crawl.find({}, function(err, crawl) {
        if(err)
            res.send(err);
        res.json(crawl);
    });
};

exports.getCrawl = function(req, res) {
    Crawl.findByName(req.params.name, function(err, crawl) {
        if(err)
            res.send(err);
        res.json(crawl);
    });
};

exports.addNewCrawl = function(req, res) {
    var newCrawl = new Crawl(req.body);
    console.log(req.body);
    console.log(newCrawl);
    newCrawl.pubs = api.getPubs(newCrawl.lat, newCrawl.long);
    newCrawl.save(function(err, user){
        if(err)
            res.send(err);
        res.json(user);
    });
};