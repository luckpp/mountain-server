const expressRouter = require('express').Router;
const apiRouter = require('./api/api.router');

class RootRouter {

    create() {

        let route = expressRouter();

        route.use('/api', apiRouter.create());

        return route;
    }
}

module.exports = new RootRouter();