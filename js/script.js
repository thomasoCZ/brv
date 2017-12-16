jQuery(document).ready(function ($) {

  var mobile = window.matchMedia("(max-width: 767px)");
  
  if (mobile.matches) {

  }




  $('.block-services li').hover(function() {

    var bgId = $(this).data('bg');
    console.log(bgId);
    $('#' + bgId).addClass('active');
    $('.color-block--about').addClass('active');

  },function() {
    $('.color-block__bg').removeClass('active');
    $('.color-block--about').removeClass('active');
  });


    $('.language-menu a').click(function(){
      $('.language-menu a').removeClass('active');
      $(this).addClass('active');
    });



  $('#fullpage').fullpage({

    scrollingSpeed: 800,
    menu: '.fullpage-menu',
    // scrollOverflow:true,
    // mouseWheelSpeed: 6

 
    afterLoad: function(anchorLink, index){
      if(anchorLink == "contact") {
          $('#form-name').focus();
      }
      else {
        $('#form-name').blur();
      }
    }
  });

});