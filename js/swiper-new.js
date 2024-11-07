
var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  navigation: {
    nextEl: ".next2",
    prevEl: ".prev2",
  },
  breakpoints: {
    300: {
      slidesPerView: 1.3,
    },
    450: {
      slidesPerView: 1.7,
    },
    520: {
      slidesPerView: 2,
    },
    620: {
      slidesPerView: 2.5,
    },
    750: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 3.5,
    },
    1100: {
      slidesPerView: 4,
    },
    1450: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".mySwiper2", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});
var swiper = new Swiper(".mySwiper3", {
  slidesPerView: 7,
  spaceBetween: 30,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1.8,
    },
    370: {
      slidesPerView: 2,
    },
    420: {
      slidesPerView: 2.5,
    },
    520: {
      slidesPerView: 2.7,
    },
    620: {
      slidesPerView: 3,
    },
    750: {
      slidesPerView: 4,
    },
    850: {
      slidesPerView: 5,
    },
    1000: {
      slidesPerView: 6,
    },
    1250: {
      slidesPerView: 7,
    },
  },
});

var swiper = new Swiper(".mySwiper4", {
  slidesPerView: 7,
  spaceBetween: 20,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  breakpoints: {
    300: {
      slidesPerView: 1,
    },
    361: {
      slidesPerView: 2,
    },
    520: {
      slidesPerView: 2,
    },
    650: {
      slidesPerView: 2.5,
    },
    750: {
      slidesPerView: 3,
    },
    850: {
      slidesPerView: 3.5,
    },
    1000: {
      slidesPerView: 4,
    },
    1250: {
      slidesPerView: 5,
    },
  },
});

var swiper = new Swiper(".mySwiper5", {
  slidesPerView: 1,
  keyboard: {
    enabled: true,
  },
  autoplay: {
    delay: 1500,
    disableOnInteraction: true,
  },
  pagination: {
    el: ".swiper-pagination2",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + "</span>";
    },
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
});

var swiper = new Swiper(".mySwiper6", {
  slidesPerView: 5,
  spaceBetween: 25,
  keyboard: {
    enabled: true,
  },
  breakpoints: {
    300: {
      spaceBetween: 15,
    },
    901: {
      spaceBetween: 25,
    },
  },
});
