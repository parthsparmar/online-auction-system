if (typeof define === 'function' && define.amd) {
  define(['./browser', './common', './number', './api', './storage'], function utilsModule(browser, common, number, api, storage) {
    'use strict';

    return {
      browser    : browser,
      commonUtils: common,
      numberUtils: number,
      apiUtils   : api,
      Storage    : storage,
    };
  });
}
