/**
 * Logger configuration
 *
 * Configure the log level for your app, as well as the transport
 * (Underneath the covers, Sails uses Winston for logging, which
 * allows for some pretty neat custom transports/adapters for log messages)
 *
 * For more information on the Sails logger, check out:
 * http://sailsjs.org/#documentation
 */

module.exports = {
    /**
     *
     * default values
     *     maxSize: 10000000,
     *     maxFiles: 10,
     *     json: false,
     *     colorize: true,
     *     level: 'info'
     *
     *     Valid `level` configs:
     *     i.e. the minimum log level to capture with sails.log.*()
     *     'error'  : Display calls to `.error()`
     *     'warn'   : Display calls from `.error()` to `.warn()`
     *     'debug'  : Display calls from `.error()`, `.warn()` to `.debug()`
     *     'info'   : Display calls from `.error()`, `.warn()`, `.debug()` to `.info()`
     *     'verbose': Display calls from `.error()`, `.warn()`, `.debug()`, `.info()` to `.verbose()`
     * @type {Object}
     */
    // log: {
    //     maxSize: 10000000,
    //     maxFiles: 10000000,
    //     json: true,
    //     colorize: true,
    //     level: 'verbose',
    //     filePath:  __dirname + '/../logs/server.log'
    // },
    log: {
        level: 'verbose',
    }
};
