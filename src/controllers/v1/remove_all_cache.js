'use strict';

const Joi = require('joi');
const models = require('../../models');

// remove all cache record
const deleteAllCache = async (data) => {
    try {
        await models.cache.deleteMany({});
        return true;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = deleteAllCache;