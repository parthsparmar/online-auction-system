define(['handlebars'], function (Handlebars) {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<footer class=\"main-footer navbar-fixed-bottom hidden-xs\">\n  <div class=\"row\">\n    <div class=\"col-sm-2 footer-links\">\n      <h5> Help </h5>\n      <ul>\n        <li> <a href=\"#\"> Payments </a> </li>\n        <li> <a href=\"#\"> Shipping </a> </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-3 footer-links\">\n      <h5> Online Auction </h5>\n      <ul>\n        <li> <a href=\"#\"> About </a> </li>\n        <li> <a href=\"#\"> Contact us </a> </li>\n      </ul>\n    </div>\n    <div class=\"col-sm-7\"></div>\n  </div>\n</footer>";
},"useData":true});

templates['header'] = template({"1":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "            <li class=\"dropdown\" category-id=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.categoryId : stack1), depth0))
    + "\">\n              <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.categoryName : stack1), depth0))
    + " <b class=\"caret\"></b> </a>\n"
    + ((stack1 = helpers["if"].call(depth0,((stack1 = ((stack1 = blockParams[0][0]) != null ? stack1.subCategories : stack1)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(2, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "            </li>\n";
},"2":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return "              <div class=\"dropdown-menu top-category\">\n                <div class=\"row top-category-content\">\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = blockParams[1][0]) != null ? stack1.subCategories : stack1),{"name":"each","hash":{},"fn":container.program(3, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                </div>\n              </div>\n";
},"3":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                  <div class=\"col-sm-"
    + ((stack1 = (helpers.divide || (depth0 && depth0.divide) || helpers.helperMissing).call(depth0,12,((stack1 = ((stack1 = blockParams[2][0]) != null ? stack1.subCategories : stack1)) != null ? stack1.length : stack1),{"name":"divide","hash":{},"fn":container.program(4, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\">\n                    <ul>\n                      <li category-id=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.categoryId : stack1), depth0))
    + "\"> \n                        <a href=\"#\">\n                          <b class=\"category-head\">\n                            "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.categoryName : stack1), depth0))
    + "\n                            <b class=\"caret\"></b>\n                          </b>\n                        </a>\n                      </li>\n"
    + ((stack1 = helpers.each.call(depth0,((stack1 = blockParams[0][0]) != null ? stack1.subCategories : stack1),{"name":"each","hash":{},"fn":container.program(6, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "                    </ul>\n                  </div>\n";
},"4":function(container,depth0,helpers,partials,data) {
    return "";
},"6":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "                      <li category-id=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.categoryId : stack1), depth0))
    + "\"> \n                        <a href=\"#\">\n                          "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.categoryName : stack1), depth0))
    + "\n                        </a>\n                      </li>\n";
},"8":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=container.lambda, alias2=container.escapeExpression;

  return "              <li class=\"dropdown\" category-id=\""
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.categoryId : stack1), depth0))
    + "\">\n                <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\"> "
    + alias2(alias1(((stack1 = blockParams[0][0]) != null ? stack1.categoryName : stack1), depth0))
    + " <b class=\"caret\"></b> </a>\n"
    + ((stack1 = (helpers.generateSubCategories || (depth0 && depth0.generateSubCategories) || helpers.helperMissing).call(depth0,"<ul class=\"dropdown-menu\"></ul>",blockParams[0][0],{"name":"generateSubCategories","hash":{},"fn":container.program(9, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "              </li>\n";
},"9":function(container,depth0,helpers,partials,data) {
    var stack1, helper;

  return "                <li category-id=\""
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.subCat : depth0)) != null ? stack1.categoryId : stack1), depth0))
    + "\"> \n                  <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n"
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.subCat : depth0)) != null ? stack1.isCategoryHead : stack1),{"name":"if","hash":{},"fn":container.program(10, data, 0),"inverse":container.program(12, data, 0),"data":data})) != null ? stack1 : "")
    + "                  </a>\n                  "
    + ((stack1 = ((helper = (helper = helpers.moreSubCategories || (depth0 != null ? depth0.moreSubCategories : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"moreSubCategories","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n                </li>\n";
},"10":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    <b class=\"category-head\">\n                    "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.subCat : depth0)) != null ? stack1.categoryName : stack1), depth0))
    + "\n                    </b>\n                    <b class=\"caret\"></b>\n";
},"12":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "                    "
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.subCat : depth0)) != null ? stack1.categoryName : stack1), depth0))
    + "\n";
},"14":function(container,depth0,helpers,partials,data) {
    return " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, helper, alias1=helpers.helperMissing, alias2="function";

  return "<header class=\"container-fluid main-header\">\n  <div class=\"visible-xs\">\n    <div class=\"row\">\n      <span class=\"col-xs-2\">\n        <button type=\"button\" class=\"btn btn-md btn-primary \" data-toggle=\"collapse\" data-target=\".main-header-menubar .navbar-collapse\">\n          <i class=\"glyphicon glyphicon-menu-hamburger\"></i>\n        </button>\n      </span>\n      <div class=\"col-xs-2\">\n        <span class=\"logo\"></span>\n      </div>\n      <div class=\"col-xs-8\">\n        <div class=\"dropdown xs-user-dropdown\">\n          "
    + ((stack1 = ((helper = (helper = helpers.userMenu || (depth0 != null ? depth0.userMenu : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"userMenu","hash":{},"data":data,"blockParams":blockParams}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n    </div>\n    <div class=\"row xs-searchbar\">\n      <div class=\"col-xs-12\">\n        <form id=\"header_search_bar_form\" class=\"form-group xs-searchbar-form\" method=\"get\" action=\"http://www.google.com\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"search-text form-control\" name=\"searchtext\" maxlength=\"120\">\n            <div class=\"input-group-btn\">\n              <button name=\"submit\" value=\"search\" class=\"btn btn-primary btn-md\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"hidden-xs\">\n    <div class=\"row\">\n      <div class=\"col-sm-2 text-uppercase\">\n        <span class=\"visible-sm hidden-lg logo\"></span>\n        <span class=\"visible-lg hidden-sm logo\"></span>\n      </div>\n\n      <!-- HTML for SEARCH BAR -->\n      <div class=\"col-sm-8 main-header-searchbar\">\n        <form id=\"header_search_bar_form\" class=\"form-group\" method=\"get\" action=\"http://www.google.com\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"search-text form-control\" name=\"searchtext\" maxlength=\"120\">\n            <div class=\"input-group-btn\">\n              <button name=\"submit\" value=\"search\" class=\"btn btn-primary btn-md\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n                <span>Search</span>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"col-sm-2 navbar-top-links\">\n        <ul class=\"nav navbar navbar-right\">\n          <li>\n            <button class=\"btn btn-primary btn-md cart-icon hidden-lg\">      \n              <i class=\"glyphicon glyphicon-shopping-cart\"></i>\n            </button>\n            <button class=\"btn btn-primary btn-md cart-icon visible-lg\">   \n              <span>Your Cart</span>   \n              <i class=\"glyphicon glyphicon-shopping-cart\"></i>\n            </button>\n          </li>\n          <li class=\"dropdown\">\n            "
    + ((stack1 = ((helper = (helper = helpers.userMenu || (depth0 != null ? depth0.userMenu : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"userMenu","hash":{},"data":data,"blockParams":blockParams}) : helper))) != null ? stack1 : "")
    + "\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <!-- Menu bar -->\n  <div class=\"main-header-menubar\">\n    <div class=\"navbar navnar-default\" role=\"navigation\">\n      <div class=\"container\">\n        <!-- Categories for screens larger than xs -->\n        <div class=\"hidden-xs\">\n          <ul class=\"nav navbar-nav\"> \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n        <!-- Categories for screens xs or smaller -->\n        <div class=\"visible-xs\">\n          <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n"
    + ((stack1 = (helpers.loadModule || (depth0 && depth0.loadModule) || alias1).call(depth0,"mainHeader",{"name":"loadModule","hash":{},"fn":container.program(14, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});

templates['homepage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<link rel=\"stylesheet\" href=\"assets/styles/toppage/homepage.css\" >\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "<div class=\"main-container\">\n<!-- include various widgets -->\n\n"
    + ((stack1 = container.invokePartial(partials.laptopsAndDesktopsWidget,depth0,{"name":"laptopsAndDesktopsWidget","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n"
    + ((stack1 = container.invokePartial(partials.homeAppliancesWidget,depth0,{"name":"homeAppliancesWidget","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "\n<!-- /include various widgets -->\n</div>\n"
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

templates['userMenu'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"usermenu-dropdown\">\n  <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n    <span class=\"hidden-sm hidden-xs\"> Your menu </span>\n    <i class=\"glyphicon glyphicon glyphicon-user\"></i>\n  </button>\n  <div class=\"dropdown-menu dropdown-menu-right\">\n    <ul>\n      <li class=\"dropdown-item\"> <a href=\"#\"> Your Account </a> </li>\n      <li class=\"dropdown-item\"> <a href=\"#\"> Your Orders </a> </li>\n      <li class=\"dropdown-item\"> <a jscf-url=\"sellItem\" href=\"\"> Sell something </a> </li>\n      <li class=\"dropdown-item\"> <a href=\"#\"> Notifications </a> </li>\n    </ul>\n    <div class=\"divider\"></div>\n    <div class=\"sign-in\">\n      <button id=\"usermenu-signin\" jscf-url=\"signin\" class=\"btn btn-primary\">Sign in</button>\n      <small> New customer?</small> <a jscf-url=\"signup\" href=\"\"> Start here </a>\n    </div>\n  </div>\n</div>";
},"useData":true});

templates['homeAppliances'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<link rel=\"stylesheet\" href=\"assets/styles/toppage/widgets/homeAppliances.css\">\n<div class=\"container-fluid\">\n  <div class=\"home-appliances-widget\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class=\"slider-text\">\n          <span class=\"text lead\"> <h2> Home appliances </h2> </span>\n          <span>\n            <button type=\"button\" class=\"btn btn-primary ld-viewmore btn-viewall\">\n              <span> View all </span>\n            </button>\n          </span>\n        </div>\n      </div>\n      <div class=\"col-md-10\">\n        <div id=\"homeAppliancesSlider\" class=\"slideshow-type1-main\">\n          <div class=\"widget-settings\">\n            <div class=\"widget-settings-mock\"\n              data-mock-data='{\"status\":\"Success\",\"items\":[{\"itemName\":\"item0\",\"itemImageUrl\":\"http://item.image.url/0\",\"itemPrice\":0,\"itemUrl\":\"/item/item0\"},{\"itemName\":\"item1\",\"itemImageUrl\":\"http://item.image.url/1\",\"itemPrice\":183.9044136108483,\"itemUrl\":\"/item/item1\"},{\"itemName\":\"item2\",\"itemImageUrl\":\"http://item.image.url/2\",\"itemPrice\":1586.6603113138021,\"itemUrl\":\"/item/item2\"},{\"itemName\":\"item3\",\"itemImageUrl\":\"http://item.image.url/3\",\"itemPrice\":2003.7267481310985,\"itemUrl\":\"/item/item3\"},{\"itemName\":\"item4\",\"itemImageUrl\":\"http://item.image.url/4\",\"itemPrice\":1838.1176724111174,\"itemUrl\":\"/item/item4\"},{\"itemName\":\"item5\",\"itemImageUrl\":\"http://item.image.url/5\",\"itemPrice\":527.9217307544936,\"itemUrl\":\"/item/item5\"},{\"itemName\":\"item6\",\"itemImageUrl\":\"http://item.image.url/6\",\"itemPrice\":4055.1409168964183,\"itemUrl\":\"/item/item6\"},{\"itemName\":\"item7\",\"itemImageUrl\":\"http://item.image.url/7\",\"itemPrice\":5508.471560264981,\"itemUrl\":\"/item/item7\"},{\"itemName\":\"item8\",\"itemImageUrl\":\"http://item.image.url/8\",\"itemPrice\":5395.258496795778,\"itemUrl\":\"/item/item8\"},{\"itemName\":\"item9\",\"itemImageUrl\":\"http://item.image.url/9\",\"itemPrice\":5426.775309444408,\"itemUrl\":\"/item/item9\"},{\"itemName\":\"item10\",\"itemImageUrl\":\"http://item.image.url/10\",\"itemPrice\":2075.406040901371,\"itemUrl\":\"/item/item10\"},{\"itemName\":\"item11\",\"itemImageUrl\":\"http://item.image.url/11\",\"itemPrice\":2395.0837522199577,\"itemUrl\":\"/item/item11\"},{\"itemName\":\"item12\",\"itemImageUrl\":\"http://item.image.url/12\",\"itemPrice\":4215.155395268869,\"itemUrl\":\"/item/item12\"},{\"itemName\":\"item13\",\"itemImageUrl\":\"http://item.image.url/13\",\"itemPrice\":2806.92701745594,\"itemUrl\":\"/item/item13\"},{\"itemName\":\"item14\",\"itemImageUrl\":\"http://item.image.url/14\",\"itemPrice\":12077.274086166846,\"itemUrl\":\"/item/item14\"}]}'>\n            </div>\n          </div>\n          <script type=\"text/template\" id=\"homeAppliancesSliderTpl\">\n            <ul class=\"content-slider\">\n              <li class=\"item\">\n                <a href=\"#ITEM_URL#\" class=\"item-wrap\">\n                  <div class=\"item-image\">\n                    <img src=\"#ITEM_IMAGE_URL#\" alt=\"#ITEM_NAME#\" class=\"item-image\">\n                  </div>\n                  <div class=\"item-info\">\n                    <span class=\"item-name\"> #ITEM_NAME# </span>\n                    <div class=\"price-info\">\n                      <span class=\"item-price\"> #ITEM_PRICE# </span>\n                    </div>\n                  </div>\n                </a>\n              </li>\n            </ul>\n          </script>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n"
    + ((stack1 = (helpers.loadModule || (depth0 && depth0.loadModule) || helpers.helperMissing).call(depth0,"homeAppliancesWidget",{"name":"loadModule","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});

templates['laptopsAndDesktops'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<link rel=\"stylesheet\" href=\"assets/styles/toppage/widgets/laptopAndDesktops.css\">\n<div class=\"container-fluid\">\n  <div class=\"laptops-and-desktops-random-widget\">\n    <div class=\"row\">\n      <div class=\"col-md-2\">\n        <div class=\"slider-text\">\n          <span class=\"text lead\"> <h2> Laptops &amp; Desktops </h2> </span>\n          <span>\n            <button type=\"button\" class=\"btn btn-primary ld-viewmore btn-viewall\">\n              <span> View all </span>\n            </button>\n          </span>\n        </div>\n      </div>\n      <div class=\"col-md-10\">\n        <div id=\"laptopsAndDesktopsSlider\" class=\"slideshow-type1-main\">\n          <div class=\"widget-settings\">\n            <div class=\"widget-settings-mock\"\n              data-mock-data='{\"status\":\"Success\",\"items\":[{\"itemName\":\"item0\",\"itemImageUrl\":\"http://item.image.url/0\",\"itemPrice\":0,\"itemUrl\":\"/item/item0\"},{\"itemName\":\"item1\",\"itemImageUrl\":\"http://item.image.url/1\",\"itemPrice\":183.9044136108483,\"itemUrl\":\"/item/item1\"},{\"itemName\":\"item2\",\"itemImageUrl\":\"http://item.image.url/2\",\"itemPrice\":1586.6603113138021,\"itemUrl\":\"/item/item2\"},{\"itemName\":\"item3\",\"itemImageUrl\":\"http://item.image.url/3\",\"itemPrice\":2003.7267481310985,\"itemUrl\":\"/item/item3\"},{\"itemName\":\"item4\",\"itemImageUrl\":\"http://item.image.url/4\",\"itemPrice\":1838.1176724111174,\"itemUrl\":\"/item/item4\"},{\"itemName\":\"item5\",\"itemImageUrl\":\"http://item.image.url/5\",\"itemPrice\":527.9217307544936,\"itemUrl\":\"/item/item5\"},{\"itemName\":\"item6\",\"itemImageUrl\":\"http://item.image.url/6\",\"itemPrice\":4055.1409168964183,\"itemUrl\":\"/item/item6\"},{\"itemName\":\"item7\",\"itemImageUrl\":\"http://item.image.url/7\",\"itemPrice\":5508.471560264981,\"itemUrl\":\"/item/item7\"},{\"itemName\":\"item8\",\"itemImageUrl\":\"http://item.image.url/8\",\"itemPrice\":5395.258496795778,\"itemUrl\":\"/item/item8\"},{\"itemName\":\"item9\",\"itemImageUrl\":\"http://item.image.url/9\",\"itemPrice\":5426.775309444408,\"itemUrl\":\"/item/item9\"},{\"itemName\":\"item10\",\"itemImageUrl\":\"http://item.image.url/10\",\"itemPrice\":2075.406040901371,\"itemUrl\":\"/item/item10\"},{\"itemName\":\"item11\",\"itemImageUrl\":\"http://item.image.url/11\",\"itemPrice\":2395.0837522199577,\"itemUrl\":\"/item/item11\"},{\"itemName\":\"item12\",\"itemImageUrl\":\"http://item.image.url/12\",\"itemPrice\":4215.155395268869,\"itemUrl\":\"/item/item12\"},{\"itemName\":\"item13\",\"itemImageUrl\":\"http://item.image.url/13\",\"itemPrice\":2806.92701745594,\"itemUrl\":\"/item/item13\"},{\"itemName\":\"item14\",\"itemImageUrl\":\"http://item.image.url/14\",\"itemPrice\":12077.274086166846,\"itemUrl\":\"/item/item14\"}]}'>\n            </div>\n          </div>\n          <script type=\"text/template\" id=\"laptopsAndDesktopsSliderTpl\">\n            <ul class=\"content-slider\">\n              <li class=\"item\">\n                <a href=\"#ITEM_URL#\" class=\"item-wrap\">\n                  <div class=\"item-image\">\n                    <img src=\"#ITEM_IMAGE_URL#\" alt=\"#ITEM_NAME#\" class=\"item-image\">\n                  </div>\n                  <div class=\"item-info\">\n                    <span class=\"item-name\"> #ITEM_NAME# </span>\n                    <div class=\"price-info\">\n                      <span class=\"item-price\"> #ITEM_PRICE# </span>\n                    </div>\n                  </div>\n                </a>\n              </li>\n            </ul>\n          </script>\n        </div>\n      </div>\n    </div>  \n  </div>\n</div>\n"
    + ((stack1 = (helpers.loadModule || (depth0 && depth0.loadModule) || helpers.helperMissing).call(depth0,"laptopsAndDesktopsWidget",{"name":"loadModule","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
return templates;
});