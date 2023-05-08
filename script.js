//Slider Initialzation

$('.home-slider').owlcarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    autoplayHoverPause: true,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    navText: ["<span class= 'fa fa-chevron-left'></span>","<span class= 'fa fa-chevron-right'></span>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: false,
        },
        1000: {
            items: 1,
            nav: true,
        },
    }
})

