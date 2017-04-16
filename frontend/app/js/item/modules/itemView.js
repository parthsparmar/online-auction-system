if (typeof define === 'function' && define.amd) {
  define(['jquery', 'jscf', 'constants'], function itemViewModule($, jscf, CONSTANTS) {
    'use strict';

    return function callback(params) {
      var CartStorage;
      var itemData = params[0];

      var settings = {
        css: {
          addToCartBtn: '#addToCartBtn',
          cartIconBtn : '.main-header .cart-icon',
        },
      };

      var $elems = {
        addToCartBtn: $(settings.css.addToCartBtn),
        cartIconBtn : $(settings.css.cartIconBtn),
      };

      function bindEvents() {
        // when click on add to cart
        $elems.addToCartBtn.on('click', function addTocartBtnClick() {
          var currentItems = CartStorage.getItem(CONSTANTS.CART_ICON.CART_ITEMS);
          var isAdded = false;
          var i;
          var n;
          var item;

          if (currentItems && currentItems.length) {
            n = currentItems.length;
            // check if item is already added ...
            for (i = 0; i < n; i++) {
              item = currentItems[i];
              if (item.itemId === itemData.itemId) {
                isAdded = true;
                break;
              }
            }

            if (!isAdded) {
              currentItems.push(itemData);
              CartStorage.setItem(CONSTANTS.CART_ICON.CART_ITEMS, currentItems);
            }
          } else {
            CartStorage.setItem(CONSTANTS.CART_ICON.CART_ITEMS, [itemData]);
          }

          $elems.cartIconBtn.trigger(CONSTANTS.CUSTOM_EVENTS.UPDATE_CART_ICON);
        });
      }

      function run() {
        CartStorage = new jscf.Storage(CONSTANTS.CART_ICON.STORAGE_KEY);

        bindEvents();
      }

      run();
    };
  });
}
