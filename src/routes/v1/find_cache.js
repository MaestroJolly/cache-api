'use strict';

const service = require('../../controllers/v1/find_cache');
const { bad_request_response, success_response } = require('../../utils/response_manager');


const getCache = async (req, res) => {
    try {
        const response = await service(req.params);
        success_response(res, 'Successfully found', response);
    } catch (error) {
        bad_request_response(res, error.message, null);
    };
}

module.exports = getCache;