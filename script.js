// Carousel secondary
const multipleCardCarousel = document.querySelector("#carouselExampleControls");
// if (window.matchMedia("(min-width: 768px)").matches) {
//   const carousel = new bootstrap.Carousel(multipleCardCarousel, {
//     interval: false,
//   });
//   const carouselWidth = document.querySelector(".carousel-inner").scrollWidth;
//   const cardWidth = document.querySelector(".carousel-item-secondary").offsetWidth;
//   let scrollPosition = 0;
//   document
//     .querySelector("#carouselExampleControls .carousel-control-next")
//     .addEventListener("click", function () {
//       if (scrollPosition < carouselWidth - cardWidth * 4) {
//         scrollPosition += cardWidth * 3;
//         document.querySelector("#carouselExampleControls .carousel-inner").scrollLeft =
//           scrollPosition;
//       }
//     });
//   document
//     .querySelector("#carouselExampleControls .carousel-control-prev")
//     .addEventListener("click", function () {
//       if (scrollPosition > 0) {
//         scrollPosition -= cardWidth * 3;
//         document.querySelector("#carouselExampleControls .carousel-inner").scrollLeft =
//           scrollPosition;
//       }
//     });
// } else {
//   multipleCardCarousel.classList.add("slide");
// }
