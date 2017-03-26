define(['jquery', 'handlebars'], function($, Handlebars) {
  return function() {
    function run() {
      var $mainHeader = $('.main-header-menubar');
      $('.navbar a.dropdown-toggle', $mainHeader).on('click', function(e) {
        var $el = $(this);
        var $parent = $el.offsetParent('.dropdown-menu');
        $el.parent('li').toggleClass('open');

        $('.nav li.open').not($el.parents('li')).removeClass('open');

        return false;
      });

      $('.hidden-xs .nav .dropdown', $mainHeader).hover(function onDropdownHoverIn() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(200);
        $(this).find('> a > .caret').css('transform', 'rotate(180deg)');
      }, function onDropdownHoverOut() {
        $(this).find('.dropdown-menu').stop(true, true).delay(100).fadeOut(200);
        $(this).find('> a > .caret').css('transform', 'rotate(0deg)');
      });

      $('.visible-xs .nav .dropdown a', $mainHeader).click(function onDropdownClick() {
        if($(this).parent().hasClass('open')) {
          $(this).parent().parent().find('.caret').css('transform', 'rotate(0deg)');
          $(this).find('.caret').css('transform', 'rotate(180deg)');
        } else {
          $(this).parent().find('.caret').css('transform', 'rotate(0deg)');
        }
      });
    }
    $(run);
  }
});