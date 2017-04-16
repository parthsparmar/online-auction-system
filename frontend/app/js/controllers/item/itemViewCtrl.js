if (typeof define === 'function' && define.amd) {
  define(['jquery', 'jscf'], function itemViewController($, jscf) {
    'use strict';

    return function callback() {
      var returnData = {};
      var urlHashRegEx = /^itemview\/([a-zA-Z0-9_\-&$#()]+)\/([0-9]+)/;
      var options = {
        data  : {},
        apiUrl: '/ite/get',
      };

      options.mockData = '{"status":"Success","item":{"itemId":683404,"itemName":"item15","itemImageUrl":"http://item.image.url/15","itemPrice":14778,"itemUrl":"/item/item15","categoryName":"Electronics","deliveryBurden":"Paid by you","itemSource":"Gujarat","shipTime":"1~2 days","sellerName":"ABC co.","sellerId":"2323","description": "avsnsnf hfisnifn nsfn snfns fsninnns"}}';

      function getItemData() {
        // call an api to get data
        jscf.apiUtils.callApi(options).done(function success(data) {
          returnData = data;
        });
      }

      function checkURIHash() {
        var match;
        var hash = window.location.hash.substring(1);
        hash = decodeURIComponent(hash);

        match = new RegExp(urlHashRegEx).exec(hash);
        if (match != null && match.length === 3) {
          options.data.itemName = match[1];
          options.data.itemId = parseInt(match[2], 10);

          getItemData();
        }
      }

      function run() {
        // first check url hash and get itemname/id to call api
        checkURIHash();
      }

      run();

      return returnData;
    };
  });
}
