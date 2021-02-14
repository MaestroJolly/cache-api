'use strict';

require('dotenv').config();

// all application config can be set here
const appConfig = {
    PORT: process.env.PORT || 5555,
    env: process.env.NODE_ENV || 'development',
    mongodb_uri: process.env.MONGODB_URI || 'mongodb://localhost/my_database',
    cache_limit: process.env.CACHE_LIMIT || 5,
    ttl_time: process.env.TTL_TIME || 300000, // minutes in milliseconds
}

module.exports = appConfig;
