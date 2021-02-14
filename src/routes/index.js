'use  strict';

const router = require('express').Router();
const getCache = require('../routes/v1/find_cache');
const getAllCache = require('../routes/v1/find_all_cache');
const createCache = require('../routes/v1/create_cache');
const updateCache = require('../routes/v1/update_cache');
const removeCache = require('../routes/v1/remove_cache');
const removeAllCache = require('../routes/v1/remove_all_cache');

// all routers goes here
router.get('/cache/:key', getCache);
router.get('/cache', getAllCache);
router.post('/cache', createCache);
router.put('/cache', updateCache);
router.delete('/cache/:key', removeCache);
router.delete('/cache', removeAllCache);

module.exports = router;



