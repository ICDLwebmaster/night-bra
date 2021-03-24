$(window).on('load', function () { //全ての読み込みが完了したら実行
  $('#page').css('display', 'none');
  $('#loader').fadeIn(1000);
  $('body').addClass('no-scroll');
});

$(function () {
  $(function () {
    $('#loader-bg').delay(3000).fadeOut(400, function () {
      $('body').removeClass('no-scroll');
    });
    $('#page').slideUp(400).css('display', 'block');
  });
});

