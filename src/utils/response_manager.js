'use strict';

// bad request error method
const bad_request_response = async (res, message, data) => {
    return res.status(400).json({
        status: "error",
        message: message,
        data: data,
    });
};
  
// success message method
const success_response = async (res, message, data) => {
    return res.status(200).json({
        status: "success",
        message: message,
        data: data,
    });
};

module.exports = {
    bad_request_response,
    success_response,
}