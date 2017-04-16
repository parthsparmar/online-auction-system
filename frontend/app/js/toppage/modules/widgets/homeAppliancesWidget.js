if (typeof define === 'function' && define.amd) {
  define(['jquery', 'jscf', 'lightslider'], function homeAppliancesWidgetModule($, jscf) {
    'use strict';

    return function homeAppliancesWidget() {
      var settings = {
        css: {
          sliderTpl         : '#homeAppliancesSliderTpl',
          widget            : '#homeAppliancesSlider',
          sliderItem        : '.item',
          widgetSettings    : '.widget-settings',
          widgetSettingsMock: '.widget-settings-mock',
          itemImage         : '.item-image',
        },

        widget: {
          enabled     : [true, 'bool'],
          image_width : [110, 'int'],
          image_height: [110, 'int'],
        },
      };

      var $elems = {
        widget       : $(settings.css.widget),
        sliderTplHtml: $(settings.css.sliderTpl).remove().html(),
      };

      var options;

      /**
       * Initialize slider element using lightSlider plugin.
       * Set necessary options for slider
       */
      function initializeSlideshow($contentSlider) {
        var sliderOptions = {
          loop      : true,
          keyPress  : true,
          enableDrag: false,
          autoWidth : true,
          prevHtml  : '<div class="slider-left-wrapper"><i class="glyphicon glyphicon-chevron-left"></i></div>',
          nextHtml  : '<div class="slider-right-wrapper"><i class="glyphicon glyphicon-chevron-right"></i></div>',
        };

        if (jscf.browser.isSp) {
          sliderOptions.controls = false;
          sliderOptions.enableDrag = true;
        }
        $elems.widget.append($contentSlider);

        $contentSlider.lightSlider(sliderOptions);

        $elems.widget.show();
      }

      /**
       * Prepare for rendering slideshow after calling api
       * @name prepareSlider
       *
       * @param {Object} data Data retrieved from api
       */
      function prepareSlider(data) {
        var $sliderTpl = $($elems.sliderTplHtml);
        var css = settings.css;
        var $liItem = $sliderTpl.find(css.sliderItem).remove();
        var items = data.items;
        var n = items.length;
        var sliderData = {};
        var i;
        var $sliderItem;
        var item;

        for (i = 0; i < n; i++) {
          item = items[i];
          sliderData['#ITEM_NAME#'] = item.itemName;
          sliderData['#ITEM_IMAGE_URL#'] = item.itemImageUrl;
          sliderData['#ITEM_URL#'] = item.itemUrl;
          sliderData['#ITEM_PRICE#'] = item.itemPrice;

          $sliderItem = $liItem.clone();
          $sliderItem.html(jscf.commonUtils.replacePlaceholders($sliderItem.html(), sliderData));
          $sliderTpl.append($sliderItem);

          // set css
          $sliderItem.find(css.itemImage).css({ width: options.widget.image_width + 'px', height: options.widget.image_height + 'px' });
        }

        initializeSlideshow($sliderTpl);
      }

      /**
       * Execution starts after validating settings and if this widget is enabled.
       * @name run
       */
      function run() {
        var apiOptions = {
          apiUril: '',
          data   : {
            something: '',
          },
        };
        // call api to get items
        jscf.apiUtils.callApi($.extend({}, apiOptions, options.mock))
          .done(prepareSlider);
      }

      /**
       * Initialize things and then run if this widget is enabled.
       */
      function init() {
        var $widget = $elems.widget;
        var css = settings.css;

        $.extend($elems, {
          widgetSettings: $widget.find(css.widgetSettings),
          mockElem      : $widget.find(css.widgetSettingsMock, css.widgetSettings),
        });

        options = (function readSettings() {
          return {
            widget: jscf.commonUtils.readSettingsFromElem(settings.widget, $elems.widgetSettings),
            mock  : jscf.apiUtils.readApiSettings($elems.mockElem),
          };
        }());

        if (!options || !(options.widget && options.widget.enabled)) {
          return;
        }

        run();
      }

      // start execution by initing
      init();
    }; // /homeAppliancesWidget
  }); // define
} // /if
