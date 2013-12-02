/**
 * ViewController
 *
 * @module      :: Controller
 * @description :: Contains logic for handling requests.
 */

var ViewService = require('../services/view'),
    Q = require('q');

module.exports = {
    _config: {
        blueprints: {
            actions: false,
            rest: false,
            prefix: ''
        }
    },

    index: function(req, res) {
        console.log('viewController index begin');

        var viewParams = ViewService.getDefaults(req, res, {

            });

        return res.view('home/dashboard.ejs', viewParams);
    },

    /**
     * redirect to right page
     * i.e http://localhost:3000/signin
     *                           ^^^^^
     *                            page = signin
     * controller will redirect to ViewController/signin
     *
     * @param  {String} page redirect to page
     */
    page: function(req, res) {
        var page = req.param('page'),
            action = req.param('action');
        console.log('viewController page begin page = ', page, ' | action = ', action, ' | req.params = ', req.params);

        if(page in sails.controllers.view) {
            return sails.controllers.view[page](req, res);
        }else{
            // Check UserID
            User.findOne({
                urlName: page
            }).done(function(err, user){
                console.log('viewController page Try to find user = ', user);
                if(!user) {
                    return sails.config[400](req, res, 30000, err);
                }

                return sails.controllers.view.userDetail(req, res, user);
            });
        }

    },

    // ------------------------------------------------------
    // User
    // ------------------------------------------------------

    /**
     * redirect to user self profile when user is login
     *
     * if user not logined redirect to '/'
     */
    me: function( req, res) {
        console.log('ViewController me begin');
        if(req.isAuthenticated()) {
            return this.userDetail(req, res, req.session.passport.user);
        }else{
            return res.redirect('/');
        }
    },

    /**
     * deisplay user profile
     * include two part of User and User's sldies
     *
     * @param  {String} page the first params. setup from config/route.js
     * @param  {Object} user target user object, if null query from req.param('page')
     */
    userDetail: function( req, res, user) {
        console.log('ViewController userDetail begin user = ', user);
        var _this = this,
            _userUrlName = req.param('page'),
            getUser = function getUser() {
                var deferred = Q.defer();
                if(user){
                    deferred.resolve(user);
                }else{
                    User.findOne(_userUrlName).done(function(err, user){
                        if(!user){
                            deferred.reject(err);
                        }

                        deferred.resolve(user);
                    });
                }

                return deferred.promise;
            };

        getUser()
            .then(function(user){
                var viewParams = ViewService.getDefaults(req, res, {
                    user: user
                });

                return res.view('user/profile.ejs', viewParams);
            })
            .fail(function(err){
                return sails.config[400](req, res, 10000, err);
            });
    },

    // ------------------------------------------------------
    // Auth
    // ------------------------------------------------------
    signin: function(req, res) {
        // when user is login redirect to home
        if(req.isAuthenticated()) {
            return res.redirect('/');
        }

        var viewParams = ViewService.getDefaults(req, res, {

            });

        return res.view('auth/signin.ejs', viewParams);
    },

    signup: function(req, res) {
        // when user is login redirect to home
        if(req.isAuthenticated()) {
            return res.redirect('/');
        }

        var viewParams = ViewService.getDefaults(req, res, {

            });

        return res.view('auth/signup.ejs', viewParams);
    }
};
