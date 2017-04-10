if (typeof define === 'function' && define.amd) {
  define(['./browser', './common', './number', './api'], function utilsModule(browser, common, number, api) {
    'use strict';

    return {
      browser    : browser,
      commonUtils: common,
      numberUtils: number,
      apiUtils   : api,
    };
  });
}
