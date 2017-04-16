if (typeof define === 'function' && define.amd) {
  define(['jquery', 'jscf', 'constants'], function viewCartItemsController($, jscf, CONSTANTS) {
    'use strict';

    return function callback() {
      var returnData = {};
      var CartStorage;

      function run() {
        var items;

        CartStorage = new jscf.Storage(CONSTANTS.CART_ICON.STORAGE_KEY);
        items = CartStorage.getItem(CONSTANTS.CART_ICON.CART_ITEMS);

        if (!items) {
          returnData.items = [];
        } else {
          returnData.items = items;
        }
      }

      run();

      return returnData;
    };
  });
}
