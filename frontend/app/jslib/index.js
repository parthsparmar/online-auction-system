/**
 * Common library to provide some common functions and SPA helpers
 * Act as a small JS framework.
 */
if (typeof define === 'function' && define.amd) {
  define(['jquery', 'jslib/utils/index'],
  function jscf($, utils) {
    'use strict';

    var framework = {};
    var routeProvider = {};

    ////////////////////////////
    // <Local members> ////////
    //////////////////////////
    var routes = {};

    var isInitiated = false;
    ////////////////////////////
    // </Local members> ///////
    //////////////////////////

    ////////////////////////////
    // <Proto members> ////////
    //////////////////////////
    framework.prototype = {};

    routeProvider.prototype = {};

    // bind other packages with `framework` object
    framework = $.extend({}, framework, utils);

    // /bind done

    framework.appName = '';
    framework.devName = '';
    ////////////////////////////
    // </Proto members> ///////
    //////////////////////////

    function initEvents() {
      /**
       * Create custom event style function for routeChange
       */
      framework.routeChange = function routeChange(routeName) {
        var targetRoute;

        if (!routeName) {
          routeName = window.location.hash;
          if (routeName === '') {
            routeName = '/';
            window.location.hash = '#';
          } else {
            routeName = '/' + routeName.substring(1);
          }
        } else {
          window.location.hash = routeName.substring(1);
        }

        targetRoute = routes[routeName];

        if (typeof require === 'function') {
          require([targetRoute.targetTpl], function callTargetTpl(targetTpl) {
            targetTpl();
          }); // require
        }
      }; // routeChange

      /**
       * To control back/forward button when hash changes
       */
      window.onhashchange = function onhashchange() {
        if (window.innerDocClick) {
          window.innerDocClick = false;
        } else {
          if (window.location.hash !== '#undefined') {
            framework.routeChange();
          } else {
            window.history.pushState('', document.title, window.location.pathname);
            window.location.reload();
          }
        }
      }; // onhashchange

      // bind click event of all elements which contains jscf-url attribute
      // and automatically route to that url on click of that element
      $(document).on('click', '[jscf-url]', function onElemClick(e) {
        var routeUrl = $(this).attr('jscf-url');
        if (routeUrl) {
          routeUrl = '/' + routeUrl;
          framework.routeChange(routeUrl);
          e.preventDefault();
        }
      });
    }

    /**
     * Initialize app.
     * Will generally bind some events.
     * Should be initiated only once, attempt to second init will throw error.
     */
    framework.init = function init(name, dName) {
      if (!isInitiated) {
        framework.appName = name;
        framework.devName = dName;
        initEvents();
        // call routeChange initially to load default page
        framework.routeChange();
        isInitiated = true;
        return framework;
      }
      throw 'app is already initiated';
    };

    /**
     * Routing Configuration of an app
     * Application have to define configurations as needed.
     */
    framework.config = function config(callback) {
      callback(routeProvider);
    };

    /**
     * routeProvider method to set route.
     * @name when
     * @param route when route is 'route'
     * @param options route options like template name, template target etc...
     */
    routeProvider.when = function when(route, options) {
      routes[route] = options;
      return routeProvider;
    };

    return framework;
  });
}
