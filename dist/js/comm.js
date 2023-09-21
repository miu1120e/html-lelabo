var swiper = new Swiper(".slide-intro", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  // autoplay: {
  //   delay: 3000,
  //   disableOnInteraction: false,
  // },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
var swiper = new Swiper(".slide-contents", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  scrollbar: {
    el: ".swiper-scrollbar",
    hide: false,
  },
  breakpoints: {
    428: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    744: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

$(document).ready(function () {
  $(".product-detail-extra-toggle").click(function () {
    $(".product-detail-main-text").slideToggle("slow");
  });
});
// add
$(function () {
  let mm = gsap.matchMedia();

  mm.add("(min-width: 1801px)", () => {
    gsap.to(".sliding-cover", {
      duration: 2.3,
      delay: 0.4,
      x: "-61vw",
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.016,0.406 0.161,0.83 0.412,0.918 0.59,0.98 0.766,1 1,1 "
      ),
    });
  });

  mm.add("(max-width: 1800px)", () => {
    gsap.to(".sliding-cover", {
      duration: 2.3,
      delay: 0.4,
      x: "-57vw",
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.016,0.406 0.161,0.83 0.412,0.918 0.59,0.98 0.766,1 1,1 "
      ),
    });
  });

  mm.add("(max-width: 1400px)", () => {
    gsap.to(".sliding-cover", {
      duration: 2.3,
      delay: 0.4,
      x: "-54vw",
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.016,0.406 0.161,0.83 0.412,0.918 0.59,0.98 0.766,1 1,1 "
      ),
    });
  });

  mm.add("(max-width: 1100px)", () => {
    gsap.to(".sliding-cover", {
      duration: 2.3,
      delay: 0.4,
      x: "-50vw",
      ease: CustomEase.create(
        "custom",
        "M0,0 C0.016,0.406 0.161,0.83 0.412,0.918 0.59,0.98 0.766,1 1,1 "
      ),
    });
  });

  gsap.to(".standard-page-header h1", {
    duration: 1.5,
    delay: 0.6,
    opacity: "100%",
    x: 0,
    ease: "ease-in-out",
  });

  gsap.to(".standard-hero-text", {
    duration: 1.5,
    delay: 1,
    opacity: "100%",
    x: 0,
    ease: "ease-in-out",
  });

  gsap.registerPlugin(ScrollTrigger);

  gsap.to(".sliding-cover", {
    scrollTrigger: {
      trigger: ".content-area section:nth-child(2)",
      start: "clamp(top 85%)",
      end: "top top",
      scrub: 2,
      markers: true,
      invalidateOnRefresh: true,
    },
    width: "200vw",
    ease: "ease-in-out",
  });

  gsap.to(".standard-hero-content-flex", {
    scrollTrigger: {
      trigger: ".content-area section:nth-child(2)",
      start: "clamp(top 85%)",
      end: "top top",
      scrub: 2,
    },
    opacity: 0,
    ease: "ease-in-out",
    x: "-30vw",
  });
});

AOS.init();
