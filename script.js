const loadCarousel = () => {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        margin: 10,
        items: 1,
        animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        nav: true,
        responsive: {
            0: {
                items: 1,
                nav: false,
            },
            600: {
                items: 2,
                nav: true,
            },
            1000: {
                items: 3,
                nav: true,
            },
        }
    })
}

$(document).ready(function () {
    loadCarousel();
  })
  // video 3
  $('.js-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    stagePadding:7,
    margin: 20,
    animateOut: fadeOut,
    animateIn: fadeIn,
    nav: true,
    autoplayHoverPause: true,
    items: 3,
    navText: ["<span class='fa fa-chevron-left'></span>", "<span class='fa fa-chevron-right'></span>"],
    responsive:{
        0:{
            items: 1,
            nav: false,
        },
        600:{
            items: 2,
            nav: false,
        },
        1000:{
            items: 3,
            nav: false,
            loop: false,
        }
    }
  })