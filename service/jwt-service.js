let jwt = require('jsonwebtoken');
let config = require('../config/.env');

module.exports = (token) => {
    jwt.verify(token, config.jwt_secret, (err, payload) => {
        if(err) {
            console.log(err);
        }
        return payload;
    });
}