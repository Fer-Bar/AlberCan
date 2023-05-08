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
                items: 1,
                nav: false,
            },
            1000: {
                items: 1,
                nav: true,
            },
        }
    })
}

$(document).ready(function () {
    loadCarousel();
  })