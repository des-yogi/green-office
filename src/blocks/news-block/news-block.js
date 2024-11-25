(function(){
  const newsSlider = new Swiper('.news-block__slider', {
    speed: 400,
    slidesPerView: 1,
    spaceBetween: 16,
    grabCursor: true,
    navigation: {
      nextEl: '.news-block__next',
      prevEl: '.news-block__prev',
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
