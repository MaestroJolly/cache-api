'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan')('dev');
const appConfig = require('./src/config');

// middlewares
app.use(cors());
app.use(morgan);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// base route
app.get('/', (req, res) => {
    return res.json({
        API: 'Fashion Cloud Coding Challenge Cache API',
        version: '1.0'
    });
});


module.exports = app;