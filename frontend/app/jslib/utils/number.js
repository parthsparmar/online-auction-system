/**
 * Provides Number related utility methods
 */
if (typeof define === 'function' && define.amd) {
  define(['jquery'], function numberUtilities($) {
    'use strict';

    var numberUtils = {};
    var CURRENCY_SYMBOL = {
      USD: '$',
      INR: '₹',
    };

    numberUtils.prototype = {};
    numberUtils.CURRENCY_BASE = {
      USD: 'USD',
      INR: 'INR',
    };

    /**
     * Formats given number to needed currency.
     * @name numberUtils.currencyFormat
     *
     * @param {String} currencyBase Currency base, e.g. USD
     * @param {Number} number number to format
     *
     * @return {String} Formatted number
     */
    numberUtils.currencyFormat = function currencyFormat(currencyBase, number) {
      var cur;
      var lastThree;
      var otherNumbers;
      var formatted;
      var currencyBaseConsts = numberUtils.CURRENCY_BASE;

      switch (currencyBase) {
        case currencyBaseConsts.USD:
          // TODO:
          break;
        case currencyBaseConsts.INR:
          cur = number.toString();
          lastThree = cur.substring(cur.length - 3);
          otherNumbers = cur.substring(0, cur.length - 3);

          if (otherNumbers !== '') {
            lastThree = ',' + lastThree;
          }

          formatted = otherNumbers.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + lastThree + ' ' + CURRENCY_SYMBOL[currencyBase];
          break;
        default:
          throw 'Invalid currency base was set.';
      }

      return formatted;
    };

    return numberUtils;
  });
}
