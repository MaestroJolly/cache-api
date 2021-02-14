'use strict';

const app = require('./app');
const logger = require('./src/utils/logger');
const appConfig = require('./src/config');
const mongoose = require('mongoose');

/**
 * Create a database connection here to our mongodb.
 * Then start application if database connection was successful.
 */

(async () =>{
    try {
        await mongoose.connect(appConfig.mongodb_uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });

        // application is being started here on our preferred port
        app.listen(appConfig.PORT, () => {
            logger.info(`app is running on port: ${appConfig.PORT}...`);
        });
    } catch (error) {
        logger.error(`Database connection was not successful due to this error ${error.message}.`);
    }
})();