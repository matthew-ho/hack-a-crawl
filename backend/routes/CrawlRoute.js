'use strict';

module.exports = function(app) {
    var crawlController = require('../controllers/CrawlController');

    app.route('/crawls')
        .get(crawlController.getAllCrawls)
        .post(crawlController.addNewCrawl);

    app.route('/crawls/:crawlName')
        .get(crawlController.getCrawl);
}