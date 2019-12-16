const express = require("express");
const server = express();
const service = require("./service");
const path = require("path");
const dotenv = require('dotenv');
const bodyParser = require("body-parser");

dotenv.config({ path: path.join(__dirname, '.env')});

server.use(bodyParser());

/** Request from short code */
server.get('/:code', service.requestFromShortCode);

/** Create short code */
server.post('/short-url/:userId', service.createShortUrl);

server.use((err, req, res, next) => {
    /* It can be changed and will be look best */
    return res.status(500).send(err.message);
});

module.exports = server;