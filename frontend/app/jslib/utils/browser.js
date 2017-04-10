if (typeof define === 'function' && define.amd) {
  define(['jquery'], function browserUtils($) {
    'use strict';

    var browser = {};

    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    browser.prototype = {};

    // detect specific smartphone device
    browser.isWindowsPhone = !!/windows phone/i.test(userAgent);
    browser.isiPhone = !!/iPhone/.test(userAgent) && !window.MSStream;
    browser.isiPad = !!/iPad/.test(userAgent) && !window.MSStream;
    browser.isiPod = !!/iPod/.test(userAgent) && !window.MSStream;
    browser.isAndroid = !!/android/i.test(userAgent) && !/windows phone/i.test(userAgent);

    // detect whether it is smartphone
    browser.isSp = browser.isiPhone || browser.isAndroid;

    return browser;
  });
}
