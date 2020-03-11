let mongo = require('mongoose');
let env = require('./.env');

mongo.connect(env.mongoose.url, {useNewUrlParser: true, useUnifiedTopology: true});

module.exports = mongo.connection;