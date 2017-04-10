if (typeof define === 'function' && define.amd) {
  define(['jquery', './common'], function apiUtilities($, commonUtils) {
    'use strict';

    var apiUtils = {};
    var apiAttrs = {
      mockData   : [undefined, 'str'],
      mockUrl    : [undefined, 'str'],
      mockTimeout: [undefined, 'int'],
    };
    var API_TIMEOUT = 10000;

    /**
     * Read API settings from given element
     * @name readApiSettings
     *
     * @param {String|Object} elem Name of element with it's id/class prefix or jquery elemet itself
     *
     * @return {Object} attr:value pairs as of api attributes (predefined)
     */
    apiUtils.readApiSettings = function readApiSettings(elem) {
      var $elem = typeof elem === 'string' ? $(elem) : elem;
      return commonUtils.readSettingsFromElem(apiAttrs, $elem);
    };

    apiUtils.callApi = function callApi(options) {
      var def = $.Deferred();
      var apiUrl;

      if (options.mockData) {
        def.resolve(JSON.parse(options.mockData));
      } else {
        apiUrl = options.mockUrl ? options.mockUrl : options.apiUrl;

        $.ajax({
          url     : apiUrl,
          data    : options.data,
          dataType: 'jsonp',
          jsonp   : 'callback' + new Date().getTime(),
          timeout : options.apiTimeout || API_TIMEOUT,
          success : function callApiSuccess(data) {
            if (data) {
              def.resolve(JSON.parse(data));
            } else {
              def.reject(data);
            }
          },
          error: function callApiFailed(jqXhr, error) {
            def.reject(jqXhr);
          },
        });
      }

      return def.promise();
    };

    return apiUtils;
  });
}
