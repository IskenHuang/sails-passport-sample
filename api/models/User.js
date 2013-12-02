/**
 * User
 *
 * @module      :: Model
 * @description :: A short summary of how this model works and what it represents.
 *
 */

var bcrypt = require('bcrypt');

module.exports = {
    attributes: {
        account: {
            type: 'email',
            required: true,
            minLength: 5,
            maxLength: 256
        },
        password: {
            type: 'string',
            required: true,
            minLength: 8,
            maxLength: 256
        },
        firstName: {
            type: 'string',
            defaultsTo: ''
        },
        lastName: {
            type: 'string',
            defaultsTo: ''
        },
        urlName: {
            type: 'string',
            unique: true
        },
        link: {
            type: 'url'
        },
        userImage: {
            type: 'url',
            required: true,
            defaultsTo: 'https://lh6.googleusercontent.com/zp85XTnogqt10OZOGE8-xe6WIJjydHnpp35Z7hXqLXeS=s712-no'
        },
        gender: {
            type: 'string',
            defaultsTo: 'male'
        },
        timezone: {
            type: 'integer'
        },
        locale: {
            type: 'string',
            defaultsTo: 'en_US'
        },
        language: {
            type: 'string',
            defaultsTo: 'en'
        },
        region: {
            type: 'string',
            defaultsTo: 'US'
        },
        email: {
            type: 'array',
            defaultsTo: []
        },
        sso: {
            type: 'json',
            defaultsTo: {}
        },
        lastLogin: {
            type: 'datetime',
            defaultsTo: new Date()
        },
        toJSON: function() {
            // this gives you an object with the current values
            var obj = this.toObject();

            // Remove the password object value
            delete obj.password;

            // remove sso cache data
            delete obj.sso;

            // add full name
            obj.fullName = this.getFullName();

            obj.locale = this.getLocale();

            // return the new object without password
            return obj;
        },
        getFullName: function() {
            var _firstName = this.firstName || '',
                _lastName = this.lastName || '';

            return _firstName + ' ' + _lastName;
        },
        getLocale: function(symbol) {
            symbol = symbol || '_';
            return this.language + symbol + this.region;
        }
    },

    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                }else{
                    user.password = hash;
                    cb(null, user);
                }
            });
        });
    },

    afterCreate: function(user, cb) {
        cb(null, user);
    }
};