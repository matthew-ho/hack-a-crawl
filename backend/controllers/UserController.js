'use strict';

var mongoose = require('mongoose'),
    User = mongoose.model('User');

exports.getUser = function(req, res) {
    User.findById(req.params.fbID, function(err, task) {
       if(err)
           res.send(err);
       res.json(task);
    });
}

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