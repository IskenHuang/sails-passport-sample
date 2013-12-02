/**
 * UserController
 *
 * @module      :: Controller
 * @description :: Contains logic for handling requests.
 */
var Q = require('q');

module.exports = {
    index: function(req, res) {
        return res.redirect('/api/user/me');
    },

    me: function(req, res) {
        return res.json(req.session.passport.user);
    }
};
