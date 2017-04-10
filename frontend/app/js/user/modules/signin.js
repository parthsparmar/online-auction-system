define(['jquery', 'handlebars', 'user'], function($, Handlebars, userpages) {
  return function() {
    $('#homepage').html(userpages.signin());
  }
});