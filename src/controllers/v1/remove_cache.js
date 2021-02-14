'use strict';

const Joi = require('joi');
const models = require('../../models');
const logger = require('../../utils/logger');

const schema = Joi.object({
    key: Joi.string().alphanum().required()
});

// remove a single cache
const deleteACache = async (data) => {
    try {
        const value = await schema.validateAsync(data);
        let findCache = await models.cache.findOne({
            key: value.key
        });

        if(!findCache){
            throw new Error("No record found.")
        }

        await findCache.remove();

        return true;
    } catch (error) {
        throw new Error(error.message);
    }
};

module.exports = deleteACache;