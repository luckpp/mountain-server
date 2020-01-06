const expressRouter = require('express').Router;
const Base = require('../../../../infrastructure/base');
const usersController = require('./users.controller');

class UsersRouter extends Base {

    create() {
        let route = expressRouter();

        route.route('/')
            .get(usersController.getUsers.bind(usersController));

        return route;
    }
}

module.exports = new UsersRouter();