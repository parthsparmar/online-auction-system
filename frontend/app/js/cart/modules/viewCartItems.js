if (typeof define === 'function' && define.amd) {
  define(['jquery', 'jscf', 'constants', 'loginUtils'], function viewCartItemsModule($, jscf, CONSTANTS, loginUtils) {
    'use strict';

    return function callback() {
      var css = {
        itemRow     : '.view-cart-items-wrap .item-row-#ITEM_INDEX#',
        itemRemove  : '.view-cart-items-wrap .item-remove',
        itemRemoveXs: '.view-cart-items-wrap .item-remove-xs',
        itemsCount  : '.view-cart-items-wrap .items-count',
        noItems     : '.view-cart-items-wrap .no-items',
        placeOrder  : '.view-cart-items-wrap .btn-checkout-span',
        cartIcon    : '.main-header .cart-icon',
        btnCheckout : '.view-cart-items-wrap .btn-checkout',
      };
      var CartStorage;

      function bindEvents() {
        // bind events for remove button of each item in list
        $(document).on('click', css.itemRemove + ',' + css.itemRemoveXs, function onItemRemove(e) {
          var index = parseInt($(this).data('index'), 10);
          var items;

          e.preventDefault();
          items = CartStorage.getItem(CONSTANTS.CART_ICON.CART_ITEMS);
          // remove item
          items.splice(index, 1);
          // update in localstorage
          CartStorage.setItem(CONSTANTS.CART_ICON.CART_ITEMS, items);
          $(css.cartIcon).trigger(CONSTANTS.CUSTOM_EVENTS.UPDATE_CART_ICON);
          $(jscf.commonUtils.replacePlaceholders(css.itemRow, { '#ITEM_INDEX#': index })).remove();
          $(css.itemsCount).text(items.length);

          if (items.length === 0) {
            $(css.noItems).removeClass('hide');
            $(css.placeOrder).hide();
          }
        });

        // place an order
        $(css.btnCheckout).on('click', function btnCheckoutClick() {
          // first need to check user is loggedin or not
          loginUtils.checkUserLoggedIn().done(function responseSuccess(data) {
            if (data && data.isLoggedIn) {
              alert('yes');
            } else {
              alert('no');
            }
          });
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
