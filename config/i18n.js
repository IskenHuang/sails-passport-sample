/**
 * Internationalization / Localization Settings
 *
 * If your app will touch people from all over the world, i18n (or internationalization)
 * may be an important part of your international strategy.
 *
 *
 * For more information, check out:
 * http://sailsjs.org/#documentation
 */

module.exports.i18n = {

    // Which locales are supported?
    locales: [
        'en'
    ],

    // you may alter a site wide default locale
    defaultLocale: 'en',

    // sets a custom cookie name to parse locale settings from  - defaults to NULL
    // cookie: 'yourcookiename',

    // where to store json files - defaults to './locales' relative to modules directory
    directory: '/config/locales',

    // whether to write new locale information to disk - defaults to true
    // updateFiles: false,

    // what to use as the indentation unit - defaults to '\t'
    indent: '\t',

    // setting extension of json files - defaults to '.json' (you might want to set this to '.js' according to webtranslateit)
    extension: '.json',
};
