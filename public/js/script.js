$(document).ready(function () {

  $('.nx').click(function () {
    $('.nx').toggleClass('mx');
  });

  // $('#photo-url').change(function () {
  //   const image = $('#photo-url').val()
  //   $('#new-image').append(`<img src=${image}>`)
  // })

  $('#photo-url').bind('input paste', function () {
    const image = $('#photo-url').val()
    $('#new-image').append(`<img src=${image}>`)
  })

});



