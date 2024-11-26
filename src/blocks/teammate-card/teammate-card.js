(function(){
  const cards = document.querySelectorAll('.teammate-card');

  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    const moreBtn = card.querySelector('.teammate-card__more');
    const returnBtn = card.querySelector('.teammate-card__return');
    const flipElem = card.querySelector('.teammate-card__inner');

    const moreBtnClickpriceHandler = function (e) {
      flipElem.classList.toggle('teammate-card__inner--backface');
    };

    if (moreBtn && returnBtn) {
      moreBtn.addEventListener('click', moreBtnClickpriceHandler);
      returnBtn.addEventListener('click', moreBtnClickpriceHandler);
    }
  }
}());
