$('.menu-toggle').click(function() {
  if ($('.site-nav').is(':hidden')) {
    $('.site-nav').slideDown('500');
    $(this).toggleClass('open');
  } else {
    $('.site-nav').slideUp();
    $(this).removeClass('open');
    $('.dropdown-content').slideUp('500');
  }
});

$('.dropdown').click(function() {
  if ($('.dropdown-content').is(':hidden')) {
    $('.dropdown-content').slideDown('500');
  } else {
    $('.dropdown-content').slideUp('500');
  }
});