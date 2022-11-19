jQuery(document).ready(function($) {
    $("#dt-episodes").owlCarousel({ autoPlay:false,pagination:false,items:5,stopOnHover:true,itemsDesktop:[900,3],itemsDesktopSmall:[750,3],itemsTablet:[500,2],itemsMobile:[320,1] });
    $(".next").click(function(){ $("#dt-episodes").trigger("owl.next") });
    $(".prev").click(function(){ $("#dt-episodes").trigger("owl.prev") });
    $("#dt-seasons").owlCarousel({ autoPlay:false,items:7,stopOnHover:true,pagination:false,itemsDesktop:[1199,5],itemsDesktopSmall:[980,5],itemsTablet:[768,4],itemsTabletSmall:false,itemsMobile:[479,3] });
    $(".next2").click(function(){ $("#dt-seasons").trigger("owl.next") });
    $(".prev2").click(function(){ $("#dt-seasons").trigger("owl.prev") });
    $("#slider-movies").owlCarousel({ autoPlay:false,items:3,stopOnHover:true,pagination:true,itemsDesktop:[1199,2],itemsDesktopSmall:[980,2],itemsTablet:[768,2],itemsTabletSmall:[600,1],itemsMobile:[479,1] });
    $("#slider-tvshows").owlCarousel({ autoPlay:false,items:3,stopOnHover:true,pagination:true,itemsDesktop:[1199,2],itemsDesktopSmall:[980,2],itemsTablet:[768,2],itemsTabletSmall:[600,1],itemsMobile:[479,1] });
    $("#slider-movies-tvshows").owlCarousel({ autoPlay:false,items:3,stopOnHover:true,pagination:true,itemsDesktop:[1199,2],itemsDesktopSmall:[980,2],itemsTablet:[768,2],itemsTabletSmall:[600,1],itemsMobile:[479,1] });
    $(".reset").click(function(event){ if (!confirm( dtGonza.reset_all )) { event.preventDefault() } });
    $(".addcontent").click(function(event){ if(!confirm(dtGonza.manually_content)){ event.preventDefault() } });});