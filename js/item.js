/* ------------------------------------ 
　ハンバーガーメニュー
------------------------------------ */
const ham = document.querySelector('#js-hamburger');
const nav = document.querySelector('#js-nav');

ham.addEventListener('click', function () {
    ham.classList.toggle('active');
    nav.classList.toggle('active');
});

/* ------------------------------------ 
　SP フッターに到達したらメニューを消す
------------------------------------ */
jQuery(function() {
  let footer = $('small').innerHeight();
  
  window.onscroll = function () {
    const point = scrollY;
    const docHeight = $(document).height();
    const dispHeight = $(window).height();
  
    if(point > docHeight-dispHeight-footer){ 
      $('.sp-menu').addClass('is-hidden');
    }else{
      $('.sp-menu').removeClass('is-hidden');
    }
  };
});