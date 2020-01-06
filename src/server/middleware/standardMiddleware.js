const Base = require('../../infrastructure/base');

const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

class StandardMiddleware extends Base {
    
    attachTo(app) {
        app.use(morgan('dev'));
        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json());
        app.use(cors());
    }
}

module.exports = new StandardMiddleware();
