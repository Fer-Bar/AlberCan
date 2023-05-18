$('.home-slider.owl-carousel').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    items: 1,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    navText: ["<span class='fa-solid fa-chevron-left'></span>", "<span class='fa-solid fa-chevron-right'></span>"],
    responsive: {
        0: {
            items: 1,
            nav: false,
        },
        600: {
            items: 1,
            nav: true,
        },
        1000: {
            items: 1,
            nav: true,
        },
    }
})

$('.major-carousel.js-carousel.owl-carousel').owlCarousel({
  loop: true,
  autoplay: true,
  stagePadding:7,
  margin: 20,
  animateOut: "fadeOut",
  animateIn: "fadeIn",
  nav: true,
  autoplayHoverPause: true,
  items: 3,
  navText: ["<span class='fa-solid fa-chevron-left'></span>", "<span class='fa-solid fa-chevron-right'></span>"],
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
          nav: true,
          loop: true,
      }
  }
})

// const loadMainCarousel = () => {
// }

//   // video 3
// const loadSecundaryCarousel = () => {
// }

// $(document).ready(function () {
//     loadMainCarousel();
//     loadSecundaryCarousel();
//   })