let mongo = require('mongoose');
let Schema = mongo.Schema;

let friend = new Schema({
    user_id: {type: Schema.Types.ObjectId, ref: 'User'},
    friend_id: {type: Schema.Types.ObjectId, ref: 'User'},
    created_at: {type: Date, default: new Date()} 
});

module.exports = mongo.model('Friend', friend);