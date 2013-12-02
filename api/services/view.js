/**
 * ViewService
 * sample: sails.services.view
 *
 * @module      :: Service
 * @description :: ViewController service
 */

module.exports = {
    /**
     * view render defaults parameter
     *
     * @param  {Object} req controller default parameter
     * @param  {Object} res controller default parameter
     * @return {Object}     default view render parameters
     */
    defaults: function(req, res) {
        var obj = {
            // in the same folder
            layout: true,
            isAuth: req.isAuthenticated(),
            title: res.i18n('product_name'),
            pageModule: '',
            fullUrl: req.protocol + '://' + req.get('host') + req.url,
            siteUrl: req.protocol + '://' + req.get('host'),
            socialMetaType: 'product',
            socialShareDescription: res.i18n('product_slogan'),
            socialShareImageUrl: req.protocol + '://' + req.get('host') + '/images/logo.png',
            socialHashTag: res.i18n('product_name'),
            socialFacebookId: sails.config.passport.getConfig().facebook.clientID,
            locale: req.locale,
            language: req.language,
            region: req.region
        };

        if(req.isAuthenticated()) {
            obj.me = req.session.passport.user;
        }

        return obj;
    },

    getDefaults: function(req, res, obj) {
        var defaults = this.defaults(req, res);

        return _.extend(defaults, obj);
    }
};
