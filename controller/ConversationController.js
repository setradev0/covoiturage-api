let Conversation = require('../model/Conversation');

exports.send = (req, res) => {
    console.log(req.body);
    Conversation.create(req.body, (err, cnv) => {
        if(err) {
            console.log('error', err);
        } else {
            return res.status(200).send(cnv);
        }
    });
}

exports.getConversation = (req, res) => {
    let condition = [{to_id: req.body.to_id, from_id: req.body.from_id}, {from_id: req.body.to_id, to_id: req.body.from_id}];
    Conversation.find( {$or: condition}, (err, conv) => {
        if(err) {
            console.log(err);
        } else {
            res.status(200).send(conv);
        }
    }).sort({created_at: -1});
}