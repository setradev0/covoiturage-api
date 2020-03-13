let controller = require('../controller/UserController');
let conversation = require('../controller/ConversationController');

let route = (app) => {
    app.post('/signup', controller.signup);
    app.post('/signin', controller.signin);
    app.post('/send-message', conversation.send);
    app.post('/add-friend', controller.addFriend);
    app.get('/get-all-user', controller.getAllUser);
    app.post('/get-conversation', conversation.getConversation);
}

module.exports = route;