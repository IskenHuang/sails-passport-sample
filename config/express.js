var passport = require('passport'),
    passportGithub = require('../api/services/passport-github'),
    passportFacebook = require('../api/services/passport-facebook');

module.exports = {
    express: {
        customMiddleware: function(app){
            // Github
            passportGithub();

            // Facebook
            passportFacebook();

            console.log('express midleware for passport');
            app.use(passport.initialize());
            app.use(passport.session());

            /*
             *
             *  {
             *      status : "error",
             *      code : "1000",
             *      data : {
             *
             *      }
             *  }
             *
             *
             */
            // console.log('add res.sendError / res.sendSuccess');
            app.use(function(req, res, next) {

                res.send.error = function(data, code) {

                    var returnData = {
                        status : 'error',
                        code : code || 404,
                        data : data
                    };

                    res.send(returnData);
                };

                res.send.success = function(data, code) {

                    var returnData = {
                        status : 'success',
                        code : code || 200,
                        data : data
                    };

                    res.send(returnData);
                };

                next();
            });
        }
    }
};
