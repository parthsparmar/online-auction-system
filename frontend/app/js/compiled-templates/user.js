define(['handlebars'], function (Handlebars) {
var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['signin'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link rel=\"stylesheet\" href=\"assets/styles/user/signin.css\">\n<div class=\"container\">\n    <div class=\"signin-form center-block col-md-6 col-sm-8\">\n        <div class=\"panel panel-info\">\n            <div class=\"panel-heading\">\n                <div class=\"panel-title\">Sign In</div>\n            </div>\n            <div class=\"panel-body\">\n                <div class=\"login-alert alert alert-danger col-sm-12\"></div>\n                <form id=\"signinform\" class=\"form-horizontal\" role=\"form\">\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                        <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" value=\"\" placeholder=\"email\">\n                    </div>\n                    <div class=\"input-group\">\n                        <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                        <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" value=\"\" placeholder=\"password\">\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-12 controls\">\n                            <a id=\"btn-singin\" class=\"btn btn-success\">Sign in</a>\n                        </div>\n                    </div>\n                    <div class=\"form-group\">\n                        <div class=\"col-sm-12 control\">\n                            <div class=\"no-account\">\n                                Don't have an account ?\n                                <a jscf-url=\"signup\" href=\"\">Sign up here</a>\n                            </div>\n                        </div>\n                    </div>\n                </form>\n            </div>\n        </div>\n    </div>\n</div>";
},"useData":true});

templates['signup'] = template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<link rel=\"stylesheet\" href=\"assets/styles/user/signup.css\">\n<div class=\"container\">\n  <div class=\"signup-form\">\n    <div class=\"row\">\n      <div class=\"col-md-3 col-sm-2\"></div>\n      <div class=\"col-md-6 col-sm-8\">\n        <div class=\"panel panel-info\">\n          <div class=\"panel-heading\">\n            <div class=\"panel-title\">Sign up</div>\n          </div>\n          <div class=\"panel-body\">\n            <div class=\"signup-alert alert alert-danger col-sm-12\"></div>\n            <form id=\"signupform\" class=\"form-horizontal\" role=\"form\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                <select id=\"salutation\" name=\"salutation\" class=\"form-control\"> \n                  <option name=\"mr\" value=\"Mr\">Mr</option>\n                  <option name=\"mrs\" value=\"Mrs\">Mrs</option>\n                </select>\n              </div>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" name=\"firstname\" id=\"firstname\" value=\"\" placeholder=\"First name\">\n              </div>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" name=\"lastname\" id=\"lastname\" value=\"\" placeholder=\"Last name\">\n              </div>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-envelope\"></i></span>\n                <input type=\"text\" class=\"form-control\" name=\"email\" id=\"email\" value=\"\" placeholder=\"Email address\"> \n              </div>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-user\"></i></span>\n                <input type=\"text\" class=\"form-control\" name=\"username\" id=\"username\" value=\"\" placeholder=\"Username\">\n              </div>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                <input type=\"password\" class=\"form-control\" name=\"password\" id=\"password\" value=\"\" placeholder=\"Password\">\n              </div>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-lock\"></i></span>\n                <input type=\"password\" class=\"form-control\" name=\"passwordagain\" id=\"passwordagain\" value=\"\" placeholder=\"Re-enter Password\">\n              </div>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon fi-male-female\"></i></span>\n                <select id=\"gender\" name=\"gender\" class=\"form-control\">\n                  <option name=\"male\" value=\"male\">Male</option>\n                  <option name=\"female\" value=\"female\">Female</option>\n                </select>\n              </div>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-phone\"></i></span>\n                <input type=\"text\" class=\"form-control\" name=\"mobile\" id=\"mobile\" value=\"\" placeholder=\"Mobile number\"> \n              </div>\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\"><i class=\"glyphicon glyphicon-phone-alt\"></i></span>\n                <input type=\"text\" class=\"form-control\" name=\"phone\" id=\"phone\" value=\"\" placeholder=\"Phone number\"> \n              </div>\n              <div class=\"col-sm-12 controls\">\n                <button class=\"btn btn-info center-block\" type=\"button\"><i class=\"fa fa-sign-in\"></i> &nbsp; Sign up</button>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-md-3 col-sm-2\"></div>\n    </div>\n  </div>\n</div>";
},"useData":true});
return templates;
});