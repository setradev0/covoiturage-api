const jwt = require('jsonwebtoken');
const config = require('../config/.env');

const authUser = async (req, res, next) => {
    let token =  req.body.token || req.query.token || req.headers['x-access-token'];
    if(!token) {
        return res.status(401).json({
            error : [{
                msg: 'No token provided'
            }]
        });
    }

    jwt.verify(token, config.jwt_secret, (err, decoded) => {
        if(err) {
            console.log(err);
            return res.status(401).json({
                error : [{
                    msg : 'Invalid Token'
                }]
            });
        }

        return next();
    });
}

module.exports = authUser;