let mongo = require('mongoose');
let Schema = mongo.Schema;

let user = new Schema({
    nom: String,
    prenom: String,
    civilite: String,
    date_naissance: Date,
    email: String,
    password: String,
    cin: String,
    telephone: String
});

module.exports = mongo.model('User', user);