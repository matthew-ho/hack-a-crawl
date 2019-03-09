'use strict';

module.exports = function(app) {
    var crawlController = require('../controllers/CrawlController');

    app.route('/crawls')
        .get(crawlController.getCrawls)
        .post(crawlController.addNewCrawl);

    app.route('/crawls/:crawlName')
        .get(usersController.getCrawl);
}