const {
    Router
} = require('express');

const controller = require('./controllers/controller');

const routes = Router();

routes.get('/getUser', (req, res) => controller.getUSer()
    .then(result => res.send(result))
    .catch(error => console.error(error))
);

module.exports = routes;