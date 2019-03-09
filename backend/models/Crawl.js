'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CrawlSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    lat: {
        type: Number,
        required: true
    },
    long: {
        type: Number,
        required: true
    },
    /*startTime: {
        type: Number,
        required: true
    },
    endTime: {
        type: Number,
        required: true
    },
    timeSpentPerPub: {
        type: Number,
        required: true
    },
    creatorID: {
        type: Number,
        required: true
    },
    invitedUsers: {
        type: [Number],
        required: true
    },*/
    pubs: {
        type: [Object]
    }
});

module.exports = mongoose.model('Crawl', CrawlSchema)