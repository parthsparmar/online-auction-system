/**
 * Common library to provide some common functions and SPA helpers
 * Act as a small JS framework.
 */
if (typeof define === 'function' && define.amd) {
  define(['jquery', 'handlebars', 'jslib/utils/index'],
  function jscf($, Handlebars, utils) {
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
       * This is actually a kind of scripts loader.
       * But it doesn't load script actually!!
       * As all scripts loaded by requirejs async, we defined our scripts as modules under modules directory of particular page.
       * and configure those modules in `module_config.js` for requirejs, and we can load that module in particular js
       * like here we wanted to do something after mainHeader gets loaded, then we defined that functionality in
       * `js/toppage/modules/mainHeader.js` and configured in `module_config.js` and loaded that module in this js as `mainHeader`
       * Now we can call it any time to do required operations after mainHeader gets loaded. So inside header.hbs, we use this helper
       * to call that function.
       */
      Handlebars.registerHelper('loadModule', function loadModule(moduleName, block) {
        require([moduleName], function requireModule(loadedModule) {
          loadedModule(block);
        });
        return '';
      });

      /**
       * Create custom event style function for routeChange
       */
      framework.routeChange = function routeChange(routeName, updateUrlHash) {
        var tRoute;
        var routeRegEx;
        var match;
        var matchedRoutes = [];

        /**
         * first get template to be required, which is generally main directory containing templates.
         * then if controller is specified then require controller, call it and get data and then call template to get html
         * and set to target element. if controller is not specified then directly call template and set html to target.
         */
        function routeNow(targetRoute) {
          function route() {
            require([targetRoute.requireTpl], function requireTemplate(requiredTpl) {
              if (targetRoute.root) {
                requiredTpl();
                findRouteTagsAndRoute();
                return;
              }
              if (targetRoute.controller) {
                require([targetRoute.controller], function callController(controller) {
                  var dataFromCtrl;
                  if (!controller) {
                    throw 'controller is not defined or is not returning a callback: ' + targetRoute.controller;
                  }
                  dataFromCtrl = controller();
                  // we will use promise here. Even normal object was there or was returned promise, this will always resolve
                  // as promise. Extra checking of returned type is unnecessary.
                  Promise.resolve(dataFromCtrl).then(function resolvedPromise(data) {
                    $(targetRoute.target).html(requiredTpl[targetRoute.templateName](data));
                    findRouteTagsAndRoute();
                  });
                }); // require
              } else {
                $(targetRoute.target).html(requiredTpl[targetRoute.templateName]());
                findRouteTagsAndRoute();
              }
            });
          }
          // if this route is depends on othre route, then we need to tell requirejs that load this route after dependsOn route
          if (targetRoute.dependsOn) {
            require(targetRoute.dependsOn, function tempRequire() {
              route();
            });
          } else {
            route();
          }
        }

        if (!routeName) {
          routeName = window.location.hash;
          if (routeName === '') {
            routeName = '/';
            window.location.hash = '#';
          } else {
            routeName = '/' + routeName.substring(1);
          }
        } else {
          if (typeof updateUrlHash === 'undefined' || updateUrlHash === true) {
            window.location.hash = routeName.substring(1);
          }
        }

        // if there are deep paths, try to find matching route otherwise just take this routName as final
        if (routeName.split('/').filter(function filterBlank(s) { return s.trim() !== ''; }).length > 1) {
          $.each(routes, function eachRoutesToFindIt(rName, config) {
            routeRegEx = new RegExp(rName);
            match = routeName.match(routeRegEx);
            if (match != null) {
              matchedRoutes.push({ match: match, config: config });
            }
          });
          tRoute = matchedRoutes[matchedRoutes.length - 1].config;
        } else {
          tRoute = routes[routeName];
        }
        if (!tRoute) {
          throw 'Given route is not configured: ' + routeName;
        }
        // if (!(routeName === '/' || routeName === '/#')) {
        routeNow(tRoute);
        // }
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
          routeUrl = routeUrl === '/' ? '/' : '/' + routeUrl;
          framework.routeChange(routeUrl);
          // so that even when hashchange fire after loading next route, this function won't call again
          window.innerDocClick = true;
          e.preventDefault();
        }
      });
    } // initEvents

    function findRouteTagsAndRoute() {
      var $elems = $(document).find('[jscf-route]');
      $.each($elems, function eachRouteElem(k, elem) {
        var $elem = $(elem);
        if (!$elem.attr('routed')) {
          framework.routeChange('/' + $elem.attr('jscf-route'), false);
          $elem.attr('routed', true);
          $elem.removeAttr('jscf-route');
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
        findRouteTagsAndRoute();
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
