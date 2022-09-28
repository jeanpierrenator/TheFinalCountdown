(function ($) {

  "use strict";

    // PRE LOADER
    $(window).load(function(){
      $('.preloader').fadeOut(1000); // set duration in brackets    
    });




    // ABOUT SLIDER
    $('body').vegas({
        slides: [
            { src: 'images/augustin.jpg' },
            { src: 'images/Hugo.jpeg' },
            { src: 'images/gitan.jpeg' },
            { src: 'images/maitres_doeuvre.png' },
            { src: 'images/Rat.jpeg' },
            { src: 'images/TicketResto.jpeg' },
            { src: 'images/vin_teddy-1.png' },
            { src: 'images/maxence_mac_2.png' }
            
        ],
        timer: false,
        transition: [ 'zoomOut', ]
    });

})(jQuery);
