'use strict';

const service = require('../../controllers/v1/find_all.cache');
const { bad_request_response, success_response } = require('../../utils/response_manager');


const getAllCache = async (req, res) => {
    try {
        const response = await service();
        success_response(res, 'Successfully found', response);
    } catch (error) {
        bad_request_response(res, error.message, null);
    };
}

module.exports = getAllCache;