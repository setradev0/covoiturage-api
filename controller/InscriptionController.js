let User = require('../model/User');


exports.signup = (req, res) => {
    console.log(req.body);
    User.create(req.body, (err, user) => {
        if(err) {
            return res.send(err);
        } else {
            return res.status(200).send(user);
        }
    });
}