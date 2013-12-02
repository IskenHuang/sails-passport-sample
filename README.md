# sails.js passport sample
- [sails.js - https://github.com/balderdashy/sails](https://github.com/balderdashy/sails)
- [Passport - http://passportjs.org/](http://passportjs.org/)

# how to ued
- update config/passport.js clientID and clientSecret
```
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
```

- install package `npm install`
- run it `node app`
