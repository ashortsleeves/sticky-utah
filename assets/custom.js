$("button.site-nav__link").click(function() {
  var ariaControls = $(this).attr('aria-controls');
  $("#"+ariaControls).toggle();
});
