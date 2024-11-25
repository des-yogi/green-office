(function(){
  const researchSlider = new Swiper('.research__slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
      nextEl: '.research__next',
      prevEl: '.research__prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 16
      },
      1280: {
        slidesPerView: 3,
        spaceBetween: 24
      },
    }
  });

}());
