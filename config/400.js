/**
 * Default 400 (not found) handler
 *
 *      __ __  ____  ____
 *     / // / / __ \/ __ \
 *    / // /_/ / / / / / /
 *   /__  __/ /_/ / /_/ /
 *     /_/  \____/\____/
 *
 *
 * If no matches are found, Sails will respond using this handler:
 *
 * For more information on 400/notfound handling in Sails/Express, check out:
 * http://expressjs.com/faq.html
 *
 * how to use
 * sails.config['400'](req, res, [Error code]);
 *
 * example
 * sails.config['400'](req, res, 10000);
 */

module.exports[400] = function apiError(req, res, code, err) {
    // set code to string
    var _code = new String(code),

        isHaveCode = ( _code in sails.config.error ) ? true : false,

        statusCode = isHaveCode ? _code : '0',

        _error = err || {},

        result = {
            status: statusCode,
            message: sails.config.error[statusCode],
            description: _error
        };

    return res.json({
        error: result
    }, 400);
};
