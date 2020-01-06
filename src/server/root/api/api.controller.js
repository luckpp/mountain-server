const Base = require('../../../infrastructure/base');

class ApiController extends Base {

    info(req, res, next) {
        res.json({
            info: 'This is the API controller'
        })
    }
}

module.exports = new ApiController();