define(['jquery', 'handlebars', 'toppage', 'mainHeader', 'hbdivide', 'jscf'],
function homepage($, Handlebars, toppage, mainHeader, divide) {
  'use strict';

  return function callback() {
    var categories = [
      {
        categoryId   : 1,
        categoryName : 'Electronics',
        level        : 1,
        subCategories: [
          {
            categoryId    : 3,
            categoryName  : 'Mobile',
            isCategoryHead: true,
            level         : 2,
            subCategories : [
              {
                categoryId  : 5,
                categoryName: 'LG',
                level       : 3,
              },
              {
                categoryId  : 6,
                categoryName: 'Motorola',
                level       : 3,
              },
              {
                categoryId  : 7,
                categoryName: 'Samsung',
                level       : 3,
              },
            ],
          },
          {
            categoryId    : 4,
            categoryName  : 'Laptop',
            level         : 2,
            isCategoryHead: true,
            subCategories : [
              {
                categoryId  : 8,
                categoryName: 'Apple',
                level       : 3,
              },
              {
                categoryId  : 9,
                categoryName: 'Toshiba',
                level       : 3,
              },
              {
                categoryId  : 10,
                categoryName: 'Lenovo',
                level       : 3,
              },
            ],
          },
          {
            categoryId    : 11,
            categoryName  : 'Desktop PCs',
            level         : 2,
            isCategoryHead: true,
          },
        ],
      },
      {
        categoryId  : 2,
        categoryName: 'Appliances',
        level       : 1,
      },
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
    Handlebars.registerHelper('generateSubCategories', function generateSubCategoriesPartial(mwrapper, mcategory, block) {
      return (function getCategories(category, wrapper) {
        var $wrapper = $(wrapper);
        var lis = '';
        var subCategories = category.subCategories;
        if (subCategories && subCategories.length) {
          $.each(subCategories, function callbackForEachSubCat(key, cat) {
            lis += block.fn({ subCat: cat, moreSubCategories: getCategories(cat, wrapper) });
          });
          $wrapper.append(lis);
          return $wrapper[0].outerHTML;
        }
        return '';
      }(mcategory, mwrapper));
    });

    // Register partials
    Handlebars.registerPartial('header', toppage.header({ categories: categories, userMenu: toppage.userMenu() }));
    Handlebars.registerPartial('footer', toppage.footer());

    $('#homepage').html(toppage.homepage());
  };
});
