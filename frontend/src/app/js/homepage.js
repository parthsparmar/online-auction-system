(function() {(window.nunjucksPrecompiled = window.nunjucksPrecompiled || {})["homepage.html"] = (function() {
function root(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var parentTemplate = null;
(parentTemplate ? function(e, c, f, r, cb) { cb(""); } : context.getBlock("head"))(env, context, frame, runtime, function(t_2,t_1) {
if(t_2) { cb(t_2); return; }
output += t_1;
output += "\r\n\r\n<header class=\"main-header\">\r\n  <div class=\"logo\">\r\n\r\n    <img src=\"image/logo.jpg\" width=\"180px\" height=\"50px\">\r\n  </div>\r\n\r\n  <!-- HTML for SEARCH BAR -->\r\n  <div class=\"main-header-searchbar\">\r\n    <form id=\"header_search_bar_form\" method=\"get\" action=\"http://www.google.com\">\r\n      <input type=\"text\" class=\"search-text\" name=\"searchtext\" size=\"100\" maxlength=\"120\">\r\n      <input type=\"submit\" value=\"search\" class=\"searchbtn\">\r\n    </form>\r\n  </div>\r\n\r\n  <div class=\"cart\">\r\n    <img src=\"image/cart.JPG\" width=\"100px\" height=\"50px\">\r\n  </div>\r\n\r\n  <div class=\"sine-in\">\r\n    <input type=\"button\" class=\"sine-in-dropdown-btn\">\r\n    </button>\r\n    <div class=\"sine-in-dropdown-btn-content\">\r\n      <a href=\"#\"> Your Account </a>\r\n      <a href=\"#\"> Your Orders </a>\r\n      <a href=\"#\"> Register </a>\r\n      <div class=\"login-btn\">\r\n        <a href=\"#\"> LOGIN </a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</header>\r\n\r\n<footer class=\"main-footer\">\r\n  <div class=\"footer-logo\">\r\n    <img src=\"image/auctionLogo.png\" width=\"100px\" height=\"50px\">\r\n  </div>\r\n  <div class=\"footer-links\">\r\n    <ul>\r\n      <li> <a href=\"#\"> About </a> </li>\r\n      <li> <a href=\"#\"> Help </a> </li>\r\n      <li> <a href=\"#\"> Press </a> </li>\r\n      <li> <a href=\"#\"> Legal </a> </li>\r\n      <li> <a href=\"#\"> Privacy </a> </li>\r\n      <li> <a href=\"#\"> Terms </a> </li>\r\n    </ul>\r\n  </div>\r\n\r\n  <div class=\"footer-social-link-icons\">\r\n    <ul>\r\n      <li>\r\n        <a href=\"https://www.facebook.com/\"> <img src=\"image/facebook.png\" width=\"50px\" height=\"50px\">\r\n        </a>\r\n      </li>\r\n\r\n      <li>\r\n        <a href=\"https://twitter.com/\"> <img src=\"image/twitter.png\" width=\"50px\" height=\"50px\">\r\n        </a>\r\n      </li>\r\n\r\n      <li>\r\n        <a href=\"https://www.instagram.com/?hl=en\"> <img src=\"image/instagram.png\" width=\"50px\" height=\"50px\">\r\n        </a>\r\n      </li>\r\n\r\n      <li>\r\n        <a href=\"https://http://youtube.com/\"> <img src=\"image/YouTube.png\" width=\"50px\" height=\"50px\">\r\n        </a>\r\n      </li>\r\n\r\n    </ul>\r\n  </div>\r\n  </div>\r\n</footer>";
if(parentTemplate) {
parentTemplate.rootRenderFunc(env, context, frame, runtime, cb);
} else {
cb(null, output);
}
});
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
function b_head(env, context, frame, runtime, cb) {
var lineno = null;
var colno = null;
var output = "";
try {
var frame = frame.push(true);
output += "\r\n  <link rel=\"stylesheet\" type=\"text/css\" href=\"defaultstyle.css\">\r\n";
cb(null, output);
;
} catch (e) {
  cb(runtime.handleError(e, lineno, colno));
}
}
return {
b_head: b_head,
root: root
};

})();
})();
