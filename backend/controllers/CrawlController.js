'use strict';

var mongoose = require('mongoose'),
    Crawl = mongoose.model('Crawl');

exports.getAllCrawls = function(req, res) {
    Crawl.find({}, function(err, crawl) {
        if(err)
            res.send(err);
        res.json(user);
    });
};

exports.getCrawl = function(req, res) {
    Crawl.findByName(req.params.name, function(err, crawl) {
        if(err)
            res.send(err);
        res.json(crawl);
    });
};