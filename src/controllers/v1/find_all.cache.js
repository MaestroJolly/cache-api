'use strict';

const Joi = require('joi');
const models = require('../../models');
const logger = require('../../utils/logger');

// get all cache records
const getAllCache = async (data) => {
    try {
        let findAllCache = await models.cache.find({
            ttl: { $gte: (new Date(Date.now()).toISOString())}
        }).select({
            key: 1,
            _id: 0
        });
        return findAllCache;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = getAllCache;