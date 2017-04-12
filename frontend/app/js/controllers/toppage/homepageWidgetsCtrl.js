if (typeof define === 'function' && define.amd) {
  define(['jquery', 'handlebars', 'toppage'], function homepageWidgetsController($, Handlebars, toppage) {
    'use strict';

    return function callback() {
      Handlebars.registerPartial('laptopsAndDesktopsWidget', toppage.laptopsAndDesktops());
      Handlebars.registerPartial('homeAppliancesWidget', toppage.homeAppliances());
      Handlebars.registerPartial('newArrivalsWidget', toppage.newArrivals());
    };
  });
}
