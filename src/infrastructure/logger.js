const loggerConfig = require('../config/config').logger;
const log4js = require('log4js');

const logger = log4js.getLogger();
logger.level = loggerConfig.level;

module.exports = logger;