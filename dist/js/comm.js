var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".slide-contents", {
  slidesPerView: 4,
  spaceBetween: 30,
  loop: true,
  autoplay:{
    delay:3000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
});
// var swiper = new Swiper(".swiper-slide", {
//   scrollbar: {
//     el: ".swiper-scrollbar",
//     hide: true,
//   },
// });
