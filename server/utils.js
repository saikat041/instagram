const jwt = require('jsonwebtoken');
const JWT_SECRET = 'My Secret';

function getUserIdFromToken(token) {

    try {
        return { userId: jwt.verify(token, JWT_SECRET).userId };
    } catch (err) {
        return { error: "Invalid token" }
    }

}

module.exports = { getUserIdFromToken }