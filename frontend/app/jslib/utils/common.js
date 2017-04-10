/**
 * Provides some common utility methods
 */
if (typeof define === 'function' && define.amd) {
  define(['jquery'], function commons($) {
    'use strict';

    var commonUtils = {};
    var htmlEntityMap = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
      '/': '&#x2F;',
    };

    commonUtils.prototype = {};

    function escapeHtml(str) {
      return String(str).replace(/&<>"'\//g, function replaceCallback(s) {
        return htmlEntityMap[s];
      });
    }

    function normalizeAttr(attrName) {
      var normalizedAttr;

      if (attrName) {
        attrName = attrName.replace(/^data-/, '');
        normalizedAttr = (function findDash(attr) {
          var index;
          index = attr.indexOf('-');
          if (index > 0) {
            attr = findDash(attr.substring(0, index) + attr.charAt(index + 1).toUpperCase() + attr.substring(index + 2));
          }
          return attr;
        }(attrName));
      }

      return normalizedAttr;
    }

    /**
     * This utility method can be used to replace placeholders with given data
     * @name commonUtils.replacePlaceholders
     *
     * @param {String} txt            text containing placeholders
     * @param {Object} data           object containing data to replace with each placeholder
     * @param {bool}   escapeDataHtml whether to escape html or not
     *
     * @return {String} replaced placeholder string
     */
    commonUtils.replacePlaceholders = function replacePlaceholders(txt, data, escapeDataHtml) {
      var i;
      var d;

      for (i in data) {
        d = escapeDataHtml === false ? data[i] : escapeHtml(data[i]);
        txt = txt.replace(new RegExp(i, 'g'), d);
      }

      return txt;
    };

    /**
     * This function will read settings from given html element and return all attrs with respective values as plain object
     *
     * @name readSettingsFromElem
     *
     * @param {Object} settings Object of needed settings with value and type
     * @param {String|Object} elem Name of element with it's id/class prefix or jquery elemet itself
     *
     * @return {Object} attr:value pairs as of settings param
     */
    commonUtils.readSettingsFromElem = function readSettingsFromElem(settings, elem) {
      var $elem = typeof elem === 'string' ? $(elem) : elem;
      var nAttrs = {};
      var retAttrs = {};

      function validateAttr(attr, attrVal) {
        var val = nAttrs[attr];
        var type = attrVal[1];

        if (val) {
          try {
            switch (type) {
              case 'bool':
                if (!(val === 'true' || val === 'yes' || val === '1' || val === '0' || val === 'false')) {
                  throw 'invalid bool value for attr: ' + attr;
                }
                val = val === 'true' || val === 'yes' || val === '1';
                break;
              case 'int':
                val = parseInt(val, 10);
                break;
              case 'float':
                val = parseFloat(val);
                break;
              default:
                val = String(val);
            }
          } catch (e) {
            if (attrVal[0] !== undefined) {
              val = attrVal[0];
            } else {
              throw e;
            }
          }
        } else {
          val = attrVal[0];
        }

        return val;
      }

      if ($elem.length) {
        $.each($elem[0].attributes, function eachAttrs() {
          if (this.specified) {
            nAttrs[normalizeAttr(this.name)] = this.value;
          }
        });
        $.each(settings, function eachSettings(key, val) {
          retAttrs[key] = validateAttr(key, val);
        });
      }

      return retAttrs;
    };

    return commonUtils;
  });
}
