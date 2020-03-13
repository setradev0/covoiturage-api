let User = require('../model/User');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let Friends = require('../model/Friends');

exports.getAllUser = (req, res) => {
    User.find({}, (err, user) => {
        if(err){
            console.log(err);
        }else{
            return res.status(200).send(user);
        }
    });
}

exports.signup = (req, res) => {
    bcrypt.hash(req.body.password, 8, (err, hash) => {
        if (err) {
            throw err
        } else {
            req.body.password = hash;
            User.create(req.body, (err, user) => {
                if(err) {
                    return res.send(err);
                } else {
                    return res.status(200).send({
                        success: true,
                        message: 'Veuillez véfifié votre mail pour la confirmation de l\'inscription'
                    });
                }
            });
        }

    });
}

exports.signin = (req, result) => {
    console.log(req.body);
    User.find({email: req.body.email}, (err, res) => {
        if(err) {
            throw err;
        } else {
            bcrypt.compare(req.body.password, res[0].password).then(bool => {
                if(bool) {
                    jwt.sign({user: res[0]}, 'fjkdlsmqjfdklsmqjfk4121', {algorithm: 'none'}, (err, token) => {
                        if(err) {
                            throw err;
                        } else {
                            return result.status(200).send({
                                user: res[0],
                                token: token
                            });
                        }
                    });
                } else {
                    return result.send({
                        error: true,
                        message: 'Votre mot de passe est incorrect'
                    });
                }
            });
        }
    });
}

exports.addFriend = (req, res) => {
    console.log(req.body);
    Friends.create(req.body, (err, friend) => {
        if(err) {
            throw err;
        } else {
            res.status(200).send(req.body);
        }
    });
}