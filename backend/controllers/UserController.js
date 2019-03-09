'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User'),
    Crawl = mongoose.model('Crawl');

exports.getUser = function(req, res) {
    User.findById(req.params.fbID, function(err, user) {
       if(err)
           res.send(err);
       res.json(user);
    });
};

exports.getUserCrawls = function(req, res) {
    User.findById(req.params.fbID, function(err, user) {
        if(err)
            res.send(err);
        res.crawls.forEach(function(crawl) {
            Crawl.getCrawl(crawl, res);
        });
    });
};

exports.getAllUsers = function(req, res) {
    User.find({}, function(err, user) {
      if(err)
          res.send(err);
      res.json(user);
    });
};

exports.addUser = function(req, res) {
    var newUser = new User(req.body);
    newUser.save(function(err, user){
        if(err)
            res.send(err);
        res.json(user);
    });
};