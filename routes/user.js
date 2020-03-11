let controller = require('../controller/InscriptionController');

let route = (app) => {
    app.post('/signup', controller.signup);
}

module.exports = route;