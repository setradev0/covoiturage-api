let mongo = require('mongoose');
let Schema = mongo.Schema;

let conversation = new Schema({
    to_id: {type: Schema.Types.ObjectId, ref: 'User'},
    from_id: {type: Schema.Types.ObjectId, ref: 'User'},
    message: {type: String, required: true},
    read: {type: Boolean, default: false},
    create_at: {type: Date, default: new Date()}
});

module.exports = mongo.model('Conversation', conversation);