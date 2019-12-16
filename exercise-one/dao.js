const { users, urls, asso_user_url } = require("./db/models");

/* Create users */
(async () => {
    try {
        let user = await users.findOne();
        if (!user) {
            let usersPromises = ['one', 'two', 'three'].map((_user) => {
                return users.create({ name: _user });
            })
            await Promise.all(usersPromises);
        }
    } catch (error) {
        process.exit();
    }
})();

/**
 * Generate the short url by current length
 * @param {number} len 
 */
function generateShortUrl(len) {
    let code = [...Array(len)]
        .map(i => (~~(Math.random() * 36)).toString(36))
        .join('');
    return code;
}

/**
 * Request to db
 * - create short url
 * - return unique id
 * @param {number} userId 
 * @param {string} longUrl
 */
async function createShortUrl(userId, longUrl) {
    try {
        let randomLen = Math.round(Math.random() * 6) + 6;
        let shortUrl = generateShortUrl(randomLen);

        /* Check user already have short code for that url or not */
        let url = await urls.findOne({ where: { userId, longUrl } });

        /* If have return that short code */
        if (!url) {
            /* Create process */
            let result = await urls.create({ longUrl, shortUrl, userId });
            if (result) {
                return {
                    alreadyHaveForThatUrl: false,
                    shortCode: shortUrl
                }
            }
            throw new Error("Somethink went wrong");
        } else {
            return {
                alreadyHaveForThatUrl: true,
                shortCode: url.shortUrl
            }
        }
    } catch (error) {
        throw error;
    }
}

async function requestFromShortCode(shortUrl) {
    try {
        let row = await urls.findOne({ where: { shortUrl } });
        console.log(row);
        if (!row) {
            throw new Error("not found");
        }
        
        /* Update visits count but without waiting... (it fast) */
        urls.increment({ visitsCount: 1 }, { where: { shortUrl } });

        return row.longUrl;
    } catch (error) {
        throw error;
    }
}


module.exports = {
    createShortUrl,
    requestFromShortCode
}