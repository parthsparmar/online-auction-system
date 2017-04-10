define(['jquery', 'handlebars', 'user'], function($, Handlebars, userPages) {
  return function() {
    $('#homepage').html(userPages.signup());
  }
});