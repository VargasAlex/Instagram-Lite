$(document).ready(function () {

  $('.nx').click(function () {
    $('.nx').toggleClass('mx');
  });

  $('#photo-url').bind('input paste', function () {
    const image = $('#photo-url').val()
    $('#new-image').html(`<img src=${image}>`)
  })

});



