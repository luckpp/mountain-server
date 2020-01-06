const Base = require('../../../../infrastructure/base');

class UsersController extends Base {
    
    getUsers(req, res, next) {
        res.json([ { hello: 'moto' }]);
    }
}

module.exports = new UsersController();