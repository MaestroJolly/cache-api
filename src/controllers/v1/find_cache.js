'use strict';

const Joi = require('joi');
const models = require('../../models');
const logger = require('../../utils/logger');

const schema = Joi.object({
    key: Joi.string().alphanum().required()
});

/**
 * Get a cache record when the Time To Live (TTL) has not exceeded.
 * If it has exceeded, generate a new one.
 */
const getCache = async (data) => {
    try {
        const value = await schema.validateAsync(data);
        let findCache = await models.cache.findOne({
            key: value.key,
            ttl: { $gte: (new Date(Date.now()).toISOString())}
        });

        if(!findCache){

            // log cache miss to the console.
            logger.info('Cache miss');

            // create random string
            findCache = await models.cache.create({
                key: value.key,
                value: require('crypto').randomBytes(24).toString('hex')
            });

        }else{
            // log cache miss to the console.
            logger.info('Cache hit');
        }

        return findCache.value;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getCache;