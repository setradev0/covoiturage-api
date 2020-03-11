let controller = require('../controller/InscriptionController');

let route = (app) => {
    app.post('/signup', controller.signup);
    app.post('/signin', controller.signin);
}

module.exports = route;