(function ($) {
	"use strict";

    jQuery(document).ready(function($){

        $("").owlCarousel({
            items: 1,
            nav: true,
            loop:true,
            autoplay: true,
            dots: false,
            navText: ["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
            mouseDrag: false,
            touchDrag: false
        });

        $(".embed-responsive iframe").addClass("embed-responsive-item");
        $(".carousel-inner .item:first-child").addClass("active");
        
        $('[data-toggle="tooltip"]').tooltip();



        


    });


    jQuery(window).load(function(){

        
    });


}(jQuery));	