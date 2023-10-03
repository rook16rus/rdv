export default function optimizationSection() {
  const sections = document.querySelectorAll('.optimization-section');

  sections.forEach(section => {
    const cards = section.querySelectorAll('.optimization-section__card');
    cards.forEach(card => {
      const cardArrow = card.querySelector('.optimization-section__card-arrow');
      const cardNumber = card.querySelector('.optimization-section__card-number');
      const isTopCard = !!card.closest('.optimization-section__top');

      console.log(cardNumber.offsetLeft)
      const cardArrowLeftPosition = cardNumber.offsetLeft + (cardNumber.clientWidth / 2) + 10;
      const cardArrowVerticalPosition =
        isTopCard ?
          parseFloat(getComputedStyle(cardNumber).top) + cardNumber.clientHeight / 2:
          parseFloat(getComputedStyle(cardNumber).bottom) + cardNumber.clientHeight / 2 ;

      if (isTopCard) {
        cardArrow.style.top = Math.round(cardArrowVerticalPosition) + 'px';
      } else {
        cardArrow.style.bottom = Math.round(cardArrowVerticalPosition) + 'px';
      }
      cardArrow.style.left = Math.round(cardArrowLeftPosition) + 'px';
    })

    const topCardsBlock = section.querySelector('.optimization-section__top');
    const bottomCardsBlock = section.querySelector('.optimization-section__bottom')

    const topCards = topCardsBlock.querySelectorAll('.optimization-section__card');
    const bottomCards = bottomCardsBlock.querySelectorAll('.optimization-section__card');

    topCards.forEach((card, index) => {
      const cardArrow = card.querySelector('.optimization-section__card-arrow');
      const cardNumber = card.querySelector('.optimization-section__card-number');
      const cardNumberOffsetLeft = Math.round(cardNumber.getBoundingClientRect().left - topCardsBlock.getBoundingClientRect().left + cardNumber.clientWidth);

      const nextCard = bottomCardsBlock.querySelectorAll('.optimization-section__card')[index];
      if (!nextCard) {
        cardArrow.style.display = "none";
        return;
      }
      const nextCardNumber = nextCard.querySelector('.optimization-section__card-number');
      const nextCardNumberOffsetLeft = Math.round(nextCardNumber.getBoundingClientRect().left - topCardsBlock.getBoundingClientRect().left);

      cardArrow.style.width = nextCardNumberOffsetLeft - cardNumberOffsetLeft - 30 + 'px';
    })

    bottomCards.forEach((card, index) => {
      const cardArrow = card.querySelector('.optimization-section__card-arrow');
      const cardNumber = card.querySelector('.optimization-section__card-number');
      const cardNumberOffsetLeft = Math.round(cardNumber.getBoundingClientRect().left - topCardsBlock.getBoundingClientRect().left + cardNumber.clientWidth);

      const nextCard = topCardsBlock.querySelectorAll('.optimization-section__card')[index + 1];
      if (!nextCard) {
        cardArrow.style.display = "none";
        return;
      }
      const nextCardNumber = nextCard.querySelector('.optimization-section__card-number');
      const nextCardNumberOffsetLeft = Math.round(nextCardNumber.getBoundingClientRect().left - topCardsBlock.getBoundingClientRect().left);

      cardArrow.style.width = nextCardNumberOffsetLeft - cardNumberOffsetLeft - 30 + 'px';
    })
  })
}
