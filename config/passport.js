var _environment = require('./local').environment.toLowerCase();

module.exports.passport = {
    getConfig:function() {
        if(_environment !== 'development' && _environment !== 'production') {
            _environment = 'development';
        }

        return this[_environment];
    },
    development: {
        github: {
            clientID: 'GITHUB_CLIENTID',
            clientSecret: 'GITHUB_CLIENTSECRET',
            callbackURL: '/api/auth/github'
        },
        facebook: {
            clientID: 'FACEBOOK_CLIENTID',
            clientSecret: 'FACEBOOK_CLIENTSECRET',
            callbackURL: '/api/auth/facebook'
        }
    },
    production: {
        github: {
            clientID: 'GITHUB_CLIENTID',
            clientSecret: 'GITHUB_CLIENTSECRET',
            callbackURL: '/api/auth/github'
        },
        facebook: {
            clientID: 'FACEBOOK_CLIENTID',
            clientSecret: 'FACEBOOK_CLIENTSECRET',
            callbackURL: '/api/auth/facebook'
        }
    }
};
