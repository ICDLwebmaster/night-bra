var windowWidth = 0;
var wrapperWidth = 0;
var itemImgWidth = 0;
var itemImgPaddingRight = 0;
var totalSpace = 0;
$(document).ready(function () {
  //set Item bg width
  addItemBgWidth();

  $(window).on('resize', function () {
    // set Item bg width
    addItemBgWidth();
  });


  // SP nav toggler click
  $('.spnav-toggler').on('click', function () {
    if ($(this).hasClass('activenav')) {
      $('body').removeClass('no-scroll');
      $(this).removeClass('activenav');
      $('.sp-menu').removeClass('activespnav');
    } else {
      $('body').addClass('no-scroll');
      $(this).addClass('activenav');
      $('.sp-menu').addClass('activespnav');
    }
  });
});

function addItemBgWidth() {
  windowWidth = $(window).width();
  wrapperWidth = $('.l-item-inner-content-fl').width();
  var rightSpace = (windowWidth - wrapperWidth) / 2;
  itemImgWidth = $('.l-item-inner-content-fl:first-child img').width() / 2;
  itemImgPaddingRight = Number($('.l-item-inner-content-fl-r:last-child').css('padding-right').replace('px', ''));
  totalSpace = rightSpace + itemImgWidth + itemImgPaddingRight;
  totalSpace = 100 - ((totalSpace * 100) / windowWidth);
  $('.item-bg').css('width', totalSpace + '%');
}
