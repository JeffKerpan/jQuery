$(document).ready(function() {

  $('.bttn').on('click', function() {
    $('.book').fadeIn(5000, function() {
      $('.bttn2').fadeIn(5000);
    });

    // Animation complete
    });
});

  $('.bttn2').on('click', function() {
    $('.book').fadeOut(5000);
});
