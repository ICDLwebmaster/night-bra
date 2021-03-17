$(function() {
  $(function() {
    $('#page').css('display', 'none');
    $('#loader').fadeIn(1000);
  });
  $(window).on('load', function() { //全ての読み込みが完了したら実行
    $('#loader-bg').delay(3000).fadeOut(400);
    $('#page').slideUp(400).css('display', 'block');
  });
});
