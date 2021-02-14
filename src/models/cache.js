const mongoose = require('mongoose');
const appConfig = require('../config');

const modelName = 'cache';
const { Schema } = mongoose;
const schemaConfig = {
    key: { type: String, index: true, unique: true },
    value: { type: String },
    ttl: { 
        type: Date, 
        default: (Date.now() + parseInt(appConfig.ttl_time))
     },
     recently_used: { type: Number, default: 0 },
    ts: { type: Date, default: Date.now() }
};
const schemaObject = new Schema(schemaConfig);
module.exports = mongoose.model(modelName, schemaObject);
