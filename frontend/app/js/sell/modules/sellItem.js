define(['jquery', 'handlebars', 'fileinput', 'jscf', 'explorertheme'],
  function sellItem($, Handlebars, fileinput, jscf) {
    'use strict';

    return function callback() {
      var fileinputOptions = {
        allowedFileExtensions: ['jpg', 'png'],
        browseOnZoneClick    : false,
        browseLabel          : 'Browse',
        maxFileCount         : 5,
        dropZoneEnabled      : false,
        uploadUrl            : '/dfd/s',
      };

      if (!jscf.browser.isSp) {
        fileinputOptions.theme = 'explorer';
      }

      $('.sellitem-form #itemimages').fileinput(fileinputOptions);

      // put mask on itemprice input box to show formatted price
      $('.sellitem-form #sellingPrice').blur(function onSellingPriceBlur() {
        var $mask = $(this).next();
        if (this.value === '' || parseInt(this.value, 10) === 0) {
          this.placeholder = '500 ~ 1000';
          return;
        }
        $mask.text(jscf.numberUtils.currencyFormat(jscf.numberUtils.CURRENCY_BASE.INR, this.value));
        this.value = '';
        this.placeholder = '';
        $mask.show();
      }).focus(function onSellingPriceFocus() {
        var $mask = $(this).next();
        var val = $mask.text();
        $mask.hide();
        if (val !== '') {
          this.value = parseInt(val.replace(/,/g, ''), 10);
        }
        $mask.text('');
      });
    };
  });
