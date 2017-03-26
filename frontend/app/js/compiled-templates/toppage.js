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
    var stack1, helper, options, alias1=helpers.helperMissing, alias2="function", buffer = 
  "<header class=\"container-fluid main-header\">\n  <div class=\"visible-xs\">\n    <div class=\"row\">\n      <span class=\"col-xs-2\">\n        <button type=\"button\" class=\"btn btn-md btn-primary \" data-toggle=\"collapse\" data-target=\".main-header-menubar .navbar-collapse\">\n          <i class=\"glyphicon glyphicon-menu-hamburger\"></i>\n        </button>\n      </span>\n      <div class=\"col-xs-2\">\n        <span class=\"logo\"></span>\n      </div>\n      <div class=\"col-xs-8\">\n        <div class=\"dropdown xs-user-dropdown\">\n          "
    + ((stack1 = ((helper = (helper = helpers.userMenu || (depth0 != null ? depth0.userMenu : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"userMenu","hash":{},"data":data,"blockParams":blockParams}) : helper))) != null ? stack1 : "")
    + "\n        </div>\n      </div>\n    </div>\n    <div class=\"row xs-searchbar\">\n      <div class=\"col-xs-12\">\n        <form id=\"header_search_bar_form\" class=\"form-group xs-searchbar-form\" method=\"get\" action=\"http://www.google.com\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"search-text form-control\" name=\"searchtext\" maxlength=\"120\">\n            <div class=\"input-group-btn\">\n              <button name=\"submit\" value=\"search\" class=\"btn btn-primary btn-md\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n  <div class=\"hidden-xs\">\n    <div class=\"row\">\n      <div class=\"col-sm-2 text-uppercase\">\n        <span class=\"visible-sm hidden-lg logo\"></span>\n        <span class=\"visible-lg hidden-sm logo\"></span>\n      </div>\n\n      <!-- HTML for SEARCH BAR -->\n      <div class=\"col-sm-8 main-header-searchbar\">\n        <form id=\"header_search_bar_form\" class=\"form-group\" method=\"get\" action=\"http://www.google.com\">\n          <div class=\"input-group\">\n            <input type=\"text\" class=\"search-text form-control\" name=\"searchtext\" maxlength=\"120\">\n            <div class=\"input-group-btn\">\n              <button name=\"submit\" value=\"search\" class=\"btn btn-primary btn-md\">\n                <i class=\"glyphicon glyphicon-search\"></i>\n                <span>Search</span>\n              </button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n      <div class=\"col-sm-2 navbar-top-links\">\n        <ul class=\"nav navbar navbar-right\">\n          <li>\n            <button class=\"btn btn-primary btn-md cart-icon hidden-lg\">      \n              <i class=\"glyphicon glyphicon-shopping-cart\"></i>\n            </button>\n            <button class=\"btn btn-primary btn-md cart-icon visible-lg\">   \n              <span>Your Cart</span>   \n              <i class=\"glyphicon glyphicon-shopping-cart\"></i>\n            </button>\n          </li>\n          <li class=\"dropdown\">\n            "
    + ((stack1 = ((helper = (helper = helpers.userMenu || (depth0 != null ? depth0.userMenu : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"userMenu","hash":{},"data":data,"blockParams":blockParams}) : helper))) != null ? stack1 : "")
    + "\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n\n  <!-- Menu bar -->\n  <div class=\"main-header-menubar\">\n    <div class=\"navbar navnar-default\" role=\"navigation\">\n      <div class=\"container\">\n        <!-- Categories for screens larger than xs -->\n        <div class=\"hidden-xs\">\n          <ul class=\"nav navbar-nav\"> \n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(1, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "          </ul>\n        </div>\n        <!-- Categories for screens xs or smaller -->\n        <div class=\"visible-xs\">\n          <div class=\"collapse navbar-collapse\">\n            <ul class=\"nav navbar-nav\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.categories : depth0),{"name":"each","hash":{},"fn":container.program(8, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</header>\n";
  stack1 = ((helper = (helper = helpers.scriptsForMainHeader || (depth0 != null ? depth0.scriptsForMainHeader : depth0)) != null ? helper : alias1),(options={"name":"scriptsForMainHeader","hash":{},"fn":container.program(14, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams}),(typeof helper === alias2 ? helper.call(depth0,options) : helper));
  if (!helpers.scriptsForMainHeader) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"useData":true,"useBlockParams":true});

templates['homepage'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<link rel=\"stylesheet\" href=\"assets/styles/homepage.css\" >\n"
    + ((stack1 = container.invokePartial(partials.header,depth0,{"name":"header","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + ((stack1 = container.invokePartial(partials.footer,depth0,{"name":"footer","data":data,"helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "");
},"usePartial":true,"useData":true});

templates['userMenu'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"usermenu-dropdown\">\n  <button type=\"button\" class=\"btn btn-primary dropdown-toggle\" data-toggle=\"dropdown\">\n    <span class=\"hidden-sm hidden-xs\"> Your menu </span>\n    <i class=\"glyphicon glyphicon glyphicon-user\"></i>\n  </button>\n  <div class=\"dropdown-menu dropdown-menu-right\">\n    <ul>\n      <li class=\"dropdown-item\"> <a href=\"#\"> Your Account </a> </li>\n      <li class=\"dropdown-item\"> <a href=\"#\"> Your Orders </a> </li>\n      <li class=\"dropdown-item\"> <a href=\"#\"> Notifications </a> </li>\n    </ul>\n    <div class=\"divider\"></div>\n    <div class=\"sign-in\">\n      <button class=\"btn btn-primary\">Sign in</button>\n      <small> New customer?</small> <a href=\"#\"> Start here </a>\n    </div>\n  </div>\n</div>";
},"useData":true});
return templates;
});