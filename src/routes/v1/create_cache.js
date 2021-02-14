'use strict';

const service = require('../../controllers/v1/create_cache');
const { bad_request_response, success_response } = require('../../utils/response_manager');


const getCache = async (req, res) => {
    try {
        const response = await service(req.body);
        success_response(res, 'Successfully created', response);
    } catch (error) {
        bad_request_response(res, error.message, null);
    };
}

module.exports = getCache;