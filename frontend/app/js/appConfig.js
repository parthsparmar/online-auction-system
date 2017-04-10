if (typeof require === 'function') {
  require(['jscf', 'bootstrap'], function appConfig(jscf) {
    'use strict';

    jscf.config(function setRoutes(routeProvider) {
      routeProvider
        .when('/', {
          targetTpl: 'homepage',
        })
        .when('/signin', {
          targetTpl: 'signin',
        })
        .when('/signup', {
          targetTpl: 'signup',
        })
        .when('/sellItem', {
          targetTpl: 'sellItem',
        });
    });
    jscf.init('onlineauction', 'app');
  });
}
