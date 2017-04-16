if (typeof define === 'function' && define.amd) {
  define(['jquery'], function StorageModule($) {
    'use strict';

    var Storage;

    function checkLocalStorage(type) {
      var storage;
      try {
        storage = window[type];
        storage.setItem('test', 'test');
        storage.removeItem('test');
        return true;
      } catch (e) {
        return false;
      }
    }

    Storage = function StorageFn(key) {
      if (!checkLocalStorage('localStorage')) {
        throw 'localStorage is not supportd in this browser';
      }

      this.key = key;

      function setMainKey(skey) {
        if (localStorage.getItem(skey) == null) {
          localStorage.setItem(skey, undefined);
        }
      }

      setMainKey(this.key);

      this.setItem = function setValue(skey, value) {
        var curValue;
        var itemToSet = {};

        setMainKey(this.key);

        curValue = localStorage.getItem(this.key);

        itemToSet[skey] = value;
        if (curValue && curValue !== 'undefined') {
          curValue = $.extend({}, JSON.parse(curValue), itemToSet);
        } else {
          curValue = itemToSet;
        }
        localStorage.setItem(this.key, JSON.stringify(curValue));
      };

      this.getItem = function getValue(skey) {
        var curValue = localStorage.getItem(this.key);
        if (curValue && curValue !== 'undefined') {
          return JSON.parse(curValue)[skey];
        }
        return undefined;
      };

      this.getAllItems = function getAllItems() {
        var curValue = localStorage.getItem(this.key);
        if (curValue && curValue !== 'undefined') {
          return JSON.parse(curValue);
        }
        return undefined;
      };

      this.removeItem = function removeItem(skey) {
        var curValue = localStorage.getItem(this.key);
        if (curValue && curValue !== 'undefined') {
          curValue = JSON.parse(curValue);
          delete curValue[skey];
        }
        curValue = JSON.stringify(curValue);
        localStorage.setItem(this.key, curValue === '{}' ? undefined : curValue);
      };

      this.remove = function remove() {
        localStorage.removeItem(this.key);
      };
    };

    return Storage;
  });
}
