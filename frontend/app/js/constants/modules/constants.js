if (typeof define === 'function' && define.amd) {
  define('constants', [], function CONSTANTS() {
    'use strict';

    var constants = {
      API_URL  : 'http://192.168.33.10/projects/online-auction-system/backend/',
      CART_ICON: {
        CART_ITEMS : 'cart_items',
        STORAGE_KEY: 'cart_icon_status',
      },

      CUSTOM_EVENTS: {
        UPDATE_CART_ICON: 'updateCartItemsCount',
      },
    };

    return constants;
  });
}
