const Base = require('../../infrastructure/base');

class ErrorMiddleware extends Base {

    attachTo(app) {
        app.use(this.middleware.bind(this));
    }

    middleware(err, req, res, next) {
        this.logger.error(err);
        res.status(500).json({
            message: err.message,
            stack: err.stack
        });
    };
}

module.exports = new ErrorMiddleware(); 