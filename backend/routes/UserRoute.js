'use strict';

module.exports = function(app) {
    var usersController = require('../controllers/UserController');

    app.route('/users')
        .get(usersController.getAllUsers)
        .post(usersController.addUser);

    app.route('/users/:userId')
        .get(usersController.getUser);
        //.delete(usersController.deleteUser);
}