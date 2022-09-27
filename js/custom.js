(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });




    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/slide-image01.jpg' },
            { src: 'images/slide-image02.jpg' },
            { src: 'images/maxence_mac_2.png' }
            
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
