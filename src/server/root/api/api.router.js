const expressRouter = require('express').Router;
const Base = require('../../../infrastructure/base');
const apiController = require('./api.controller');
const usersRouter = require('./users/users.router');

class ApiRouter extends Base {

    create() {
        let route = expressRouter();

        route.route('/')
            .get(apiController.info.bind(apiController));

        route.use('/users', usersRouter.create());

        return route;
    }
}

module.exports = new ApiRouter();