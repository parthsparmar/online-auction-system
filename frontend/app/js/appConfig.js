if (typeof require === 'function') {
  require(['jscf', 'bootstrap'], function appConfig(jscf) {
    'use strict';

    jscf.config(function setRoutes(routeProvider) {
      routeProvider
        .when('/homepage', {
          requireTpl: 'homepage',
          root      : true,
        })
        .when('/', {
          requireTpl  : 'toppage',
          controller  : 'homepageWidgetsCtrl',
          templateName: 'homepageWidgets',
          target      : '.main-container',
          dependsOn   : ['homepage'],
        })
        .when('/signin', {
          requireTpl  : 'user',
          templateName: 'signin',
          target      : '#homepage',
        })
        .when('/signup', {
          requireTpl  : 'user',
          templateName: 'signup',
          target      : '#homepage',
        })
        .when('/itemview', {
          requireTpl  : 'item',
          templateName: 'itemView',
          controller  : 'itemViewCtrl',
          target      : '.main-container',
          dependsOn   : ['homepage'],
        })
        .when('/sellItem', {
          requireTpl  : 'sell',
          templateName: 'sellItem',
          target      : '#homepage',
        });
    });
    jscf.init('onlineauction', 'app');
  });
}
