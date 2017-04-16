if (typeof define === 'function' && define.amd) {
  define(['jquery', 'jscf', 'constants'], function homepageBindingsModule($, jscf, CONSTANTS) {
    'use strict';

    return function callback() {
      var CartStorage;

      var settings = {
        css: {
          cartIconBtn      : '.main-header .cart-icon',
          cartIconItemCount: '.main-header .cart-items-number',
        },
      };

      var $elems = {
        cartIconBtn      : $(settings.css.cartIconBtn),
        cartIconItemCount: $(settings.css.cartIconItemCount),
      };

      // custom event bind to cart icon. Can be triggered anytime from anywhere to update cart items count
      $elems.cartIconBtn.on(CONSTANTS.CUSTOM_EVENTS.UPDATE_CART_ICON, function onUpdateCartItemsCount() {
        var currentItems = CartStorage.getItem(CONSTANTS.CART_ICON.CART_ITEMS);
        var count = currentItems && currentItems.length ? currentItems.length : 0;
        $elems.cartIconItemCount.each(function eachItemCountElem(k, el) {
          $(el).text(count);
        });
        if (!count || count === 0) {
          $elems.cartIconItemCount.hide();
        } else {
          $elems.cartIconItemCount.show();
        }
      });

      function run() {
        CartStorage = new jscf.Storage(CONSTANTS.CART_ICON.STORAGE_KEY);

        setTimeout(function waitForSometime() {
          // initially also update cart icon items number
          $elems.cartIconBtn.trigger('updateCartItemsCount');
        }, 0);
      }

      run();
    };
  });
}
