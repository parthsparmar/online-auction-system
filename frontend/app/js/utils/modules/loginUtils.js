if (typeof define === 'function' && define.amd) {
  define(['jquery', 'jscf', 'constants'], function loginUtilsModule($, jscf, CONSTANTS) {
    'use strict';

    var loginUtils = {};

    loginUtils.checkUserLoggedIn = function checkUserLoggedIn() {
      var options = {
        apiUrl  : CONSTANTS.API_URL + 'user/isLoggedIn.php',
        callback: 'isLoggedInUser',
      };
      return jscf.apiUtils.callApi(options);
    };

    return loginUtils;
  });
}
