const api = require('../api');

module.exports = function (app) {
    app.route('/dados').get(api.getDados);
}