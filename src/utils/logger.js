const winston = require("winston");
const appConfig = require('../config');

const logLevel = appConfig.env === "development" ? "debug" : "warn";

const logger = winston.createLogger({
  transports: [
    new winston.transports.Console({
      level: logLevel,
      format: winston.format.simple(),
    }),
  ],
});

module.exports = logger;
