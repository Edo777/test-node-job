const dao = require("./dao");
let port = 3000;
const publicUrl = `localhost:${port}/`;

/**
 * Send long url to dao and get result
 * @param {*} req 
 * @param {*} res 
 */
async function createShortUrl(req, res, next) {
    try {
        let { userId } = req.params;
        let { longUrl } = req.body;

        if (!longUrl || !userId) {
            return res.status(400).send('user and long url is required');
        }

        let result = await dao.createShortUrl(userId, longUrl);

        /* Change shortCode to request url */
        result.shortCode = publicUrl + result.shortCode;

        return res.send(result);
    } catch (error) {
        next(error);
    }
}

async function requestFromShortCode(req, res, next) {
    try {
        let shortCode = req.params.code;
        let longUrl = await dao.requestFromShortCode(shortCode);

        return res.redirect(longUrl);
    } catch (error) {
        next(error);
    }
}

module.exports = {
    createShortUrl,
    requestFromShortCode
};