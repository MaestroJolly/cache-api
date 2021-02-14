'use strict';

const Joi = require('joi');
const models = require('../../models');
const createEntry = require('./create_entry');
const logger = require('../../utils/logger');

const schema = Joi.object({
    key: Joi.string().alphanum().required()
});

// create single cache
const createACache = async (data) => {
    try {
        const value = await schema.validateAsync(data);
        let createCache = await createEntry(value.key);
        return createCache.value;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = createACache;