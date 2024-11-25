(function(){
  const heroMain = new Swiper('.hero-main__slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 40,
    grabCursor: true,
    navigation: {
      nextEl: '.hero-main__next',
      prevEl: '.hero-main__prev',
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 24
      },
      1280: {
        slidesPerView: 1,
        spaceBetween: 40
      }
    },
    // autoplay: {
    //   delay: 7000,
    // },
  });
}());

