(function(){
  const partnerSlider = new Swiper('.partners__list', {
    speed: 400,
    slidesPerView: 'auto',
    spaceBetween: 16,
    grabCursor: true,
    breakpoints: {
      1280: {
        spaceBetween: 24
      },
    }
  });

}());

