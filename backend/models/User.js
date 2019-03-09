'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    name: {
        type: String
    },
    fbID: {
        type: Number
    },
    createdDate: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('User', UserSchema)