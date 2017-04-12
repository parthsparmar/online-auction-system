define(['handlebars'], function (Handlebars) {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['itemView'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var helper;

  return "Here view item\n"
    + container.escapeExpression(((helper = (helper = helpers.a || (depth0 != null ? depth0.a : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"a","hash":{},"data":data}) : helper)));
},"useData":true});
return templates;
});