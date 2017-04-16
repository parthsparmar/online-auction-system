define(['handlebars'], function (Handlebars) {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['viewCartItems'] = template({"1":function(container,depth0,helpers,partials,data) {
    return " hide ";
},"3":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.items : depth0),{"name":"each","hash":{},"fn":container.program(4, data, 2, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"4":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1;

  return ((stack1 = helpers["with"].call(depth0,blockParams[0][0],{"name":"with","hash":{},"fn":container.program(5, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"5":function(container,depth0,helpers,partials,data,blockParams) {
    var helper, alias1=container.lambda, alias2=container.escapeExpression, alias3=helpers.helperMissing, alias4="function";

  return "                  <div class=\"row item item-row-"
    + alias2(alias1(blockParams[1][1], depth0))
    + "\">\n                    <div class=\"col-md-3 col-xs-10\">\n                      <div class=\"item-image\">\n                        <img src=\""
    + alias2(((helper = (helper = helpers.itemImageUrl || (depth0 != null ? depth0.itemImageUrl : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"itemImageUrl","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\" alt=\""
    + alias2(((helper = (helper = helpers.itemName || (depth0 != null ? depth0.itemName : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"itemName","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + "\">\n                      </div>\n                    </div>\n                    <div class=\"visible-xs col-xs-1\">\n                      <div class=\"icons\">\n                        <div class=\"item-remove-icon\">\n                          <a href=\"#\" class=\"item-remove-xs\" data-index=\""
    + alias2(alias1(blockParams[1][1], depth0))
    + "\"><i class=\"fi-x\"></i></a>\n                        </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-8 col-xs-8\">\n                      <div class=\"item-info\">\n                        <span class=\"item-name\"> "
    + alias2(((helper = (helper = helpers.itemName || (depth0 != null ? depth0.itemName : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"itemName","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + " </span>\n                        <div class=\"category\"> "
    + alias2(((helper = (helper = helpers.categoryName || (depth0 != null ? depth0.categoryName : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"categoryName","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + " </div>\n                        <div class=\"item-price\"> "
    + alias2(((helper = (helper = helpers.itemPrice || (depth0 != null ? depth0.itemPrice : depth0)) != null ? helper : alias3),(typeof helper === alias4 ? helper.call(depth0,{"name":"itemPrice","hash":{},"data":data,"blockParams":blockParams}) : helper)))
    + " </div>\n                      </div>\n                    </div>\n                    <div class=\"col-md-1 hidden-xs\">\n                      <div class=\"icons\">\n                        <div class=\"item-remove-icon\">\n                          <a href=\"#\" class=\"item-remove\" data-index=\""
    + alias2(alias1(blockParams[1][1], depth0))
    + "\"><i class=\"fi-x\"></i></a>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n";
},"7":function(container,depth0,helpers,partials,data) {
    return " ";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data,blockParams) {
    var stack1, alias1=helpers.helperMissing;

  return "<link rel=\"stylesheet\" href=\"assets/styles/cart/viewCartItems.css\">\n<div class=\"container-fluid\">\n  <div class=\"view-cart-items-wrap\">\n    <div class=\"col-md-2\"></div>\n    <div class=\"col-md-8\">\n      <div class=\"view-cart-panel-wrap\">\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <div class=\"panel-title\"> \n              <span> Total items in cart: </span> <span class=\"items-count\">"
    + container.escapeExpression(container.lambda(((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1), depth0))
    + "</span>\n              <span class=\"btn-checkout-span "
    + ((stack1 = (helpers.ifCond || (depth0 && depth0.ifCond) || alias1).call(depth0,((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1),"===",0,{"name":"ifCond","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\">\n                <button type=\"button\" class=\"btn btn-success btn-md btn-checkout\">\n                  <span>Place Order</span>\n                </button>\n              </span>\n            </div>\n          </div>\n          <div class=\"panel-body\">\n"
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(3, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "            <div class=\"no-items "
    + ((stack1 = helpers["if"].call(depth0,((stack1 = (depth0 != null ? depth0.items : depth0)) != null ? stack1.length : stack1),{"name":"if","hash":{},"fn":container.program(1, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "")
    + "\">\n              <div class=\"info\">Currently there are no items in cart.</div>\n              <button jscf-url=\"/\" type=\"button\" class=\"btn btn-success btn-lg\">Continue shopping...</button>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-2\"></div>\n    </dvi>\n  </div>\n</div>\n"
    + ((stack1 = (helpers.loadModule || (depth0 && depth0.loadModule) || alias1).call(depth0,"viewCartItems",{"name":"loadModule","hash":{},"fn":container.program(7, data, 0, blockParams),"inverse":container.noop,"data":data,"blockParams":blockParams})) != null ? stack1 : "");
},"useData":true,"useBlockParams":true});
return templates;
});