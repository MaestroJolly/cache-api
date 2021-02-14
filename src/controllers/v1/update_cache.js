'use strict';

const Joi = require('joi');
const models = require('../../models');
const logger = require('../../utils/logger');

const schema = Joi.object({
    key: Joi.string().alphanum().required()
});

const updateACache = async (data) => {
    try {
        const value = await schema.validateAsync(data);
        let findCache = await models.cache.findOne({
            key: value.key
        });

        if(!findCache){
            throw new Error("No record found.")
        }

        findCache.value = require('crypto').randomBytes(24).toString('hex');
        await findCache.save();

        return findCache.value;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = updateACache;