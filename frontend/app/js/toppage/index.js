typeof require === 'function' &&
require(['jquery', 'handlebars', 'toppage', 'mainHeader', 'hbdivide'], function ($, Handlebars, toppage, mainHeader, divide) {
  var categories = [
    {
      categoryId  : 1,
      categoryName: 'Electronics',
      level: 1,
      subCategories: [
        {
          categoryId    : 3,
          categoryName  : 'Mobile',
          isCategoryHead: true,
          level: 2,
          subCategories: [
            {
              categoryId  : 5,
              categoryName: 'LG',
              level: 3
            },
            {
              categoryId  : 6,
              categoryName: 'Motorola',
              level: 3
            },
            {
              categoryId  : 7,
              categoryName: 'Samsung',
              level: 3
            }
          ]
        },
        {
          categoryId  : 4,
          categoryName: 'Laptop',
          level: 2,
          isCategoryHead: true,
          subCategories: [
            {
              categoryId  : 8,
              categoryName: 'Apple',
              level: 3
            },
            {
              categoryId  : 9,
              categoryName: 'Toshiba',
              level: 3
            },
            {
              categoryId  : 10,
              categoryName: 'Lenovo',
              level: 3
            }
          ]
        },
        {
          categoryId: 11,
          categoryName: 'Desktop PCs',
          level: 2,
          isCategoryHead: true
        }
      ]
    },
    {
      categoryId  : 2,
      categoryName: 'Appliances',
      level: 1
    }
  ];

  /**
   * This helper will work to recursively iterate over categories and make nested menu for XS devices.
   * Similar like tree structure:
   * A
   * |
   * ---- B
   *      |
   *      ---- C
   *      ---- D
   *      ---- E
   * |
   * ---- F
   *      |
   *      ---- G
   * .
   * .
   * .
   */
  Handlebars.registerHelper('generateSubCategories', function(wrapper, category, block) {
    
    return (function getCategories(category, wrapper) {
      var $wrapper = $(wrapper);
      var lis = '';
      var subCategories = category.subCategories;
      if(subCategories && subCategories.length) {
        $.each(subCategories, function(key, cat) {
          lis += block.fn({subCat: cat, moreSubCategories: getCategories(cat, wrapper)});
        });
        $wrapper.append(lis);
        return $wrapper[0].outerHTML;
      }
      return '';
    }(category, wrapper));
  });

  /**
   * This is actually a kind of scripts loader.
   * But it doesn't load script actually!!
   * As all scripts loaded by requirejs async, we defined our scripts as modules under modules directory of particular page.
   * and configure those modules in `module_config.js` for requirejs, and we can load that module in particular js
   * like here we wanted to do something after mainHeader gets loaded, then we defined that functionality in 
   * `js/toppage/modules/mainHeader.js` and configured in `module_config.js` and loaded that module in this js as `mainHeader`
   * Now we can call it any time to do required operations after mainHeader gets loaded. So inside header.hbs, we use this helper
   * to call that function.
   */
  Handlebars.registerHelper('scriptsForMainHeader', function(block) {
    mainHeader();
    return '';
  });

  //Register partials
  Handlebars.registerPartial('header', toppage.header({ categories: categories, userMenu: toppage.userMenu() }));
  Handlebars.registerPartial('footer', toppage.footer());

  var homepagehtml = toppage.homepage();
  $("#homepage").html(homepagehtml);
});
