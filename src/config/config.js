const _ = require('lodash');

const environments = {
    dev: './configTypes/configDevelopment.js',
    prod: './configTypes/configProduction.js',
};

class ConfigLoader {

    parseEnvironmentType(type) {
        let environmentTypes = Object.keys(environments);
        type = type ? type.trim() : '';
        if (environmentTypes.includes(type)) {
            return type;
        } else {
            return environmentTypes[0];
        }
    }

    loadConfig() {
        let environmentType = this.parseEnvironmentType(process.env.ENV);
        let environmentConfigPath = environments[environmentType];
        let environmentConfig = null;
        try {
            environmentConfig = require(environmentConfigPath);
        } catch {
            environmentConfig = {};
        }
        let config = require('./configBase');
        let result = _.merge(config, environmentConfig);
        return result;
    }
}

let configLoader = new ConfigLoader();

module.exports = configLoader.loadConfig();