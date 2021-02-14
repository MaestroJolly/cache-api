'use strict';

const Joi = require('joi');
const models = require('../../models');
const logger = require('../../utils/logger');

const schema = Joi.object({
    key: Joi.string().alphanum().required()
});

// create single cache
const createACache = async (data) => {
    try {
        const value = await schema.validateAsync(data);
        let createCache = await models.cache.create({
            key: value.key,
            value: require('crypto').randomBytes(24).toString('hex'),
        });
        return createCache.value;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = createACache;