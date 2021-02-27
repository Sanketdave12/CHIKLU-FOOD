$('.carousel').owlCarousel({
    stagePadding: 20,
    loop:true,
    autoplay:false,
    margin:0,
    // autoplayTimeout:3000,
    // autoplayHoverPause: true,
    // responsiveClass:true,
    responsive:{
        0:{
            items:4,
            nav:false
        },
        480:{
            items:3,
            nav:false
        },
        1024:{
            items:5,
            nav:false,
        }
    }
});