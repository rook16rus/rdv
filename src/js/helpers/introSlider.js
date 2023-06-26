import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function introSlider() {
  const intro = document.querySelector('.intro');
  if (!intro) return

  const swiper = new Swiper(intro.querySelector('.intro__slider'), {
    slidesPerView: 1,
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    autoHeight: true,
    speed: 500,
    autoplay: {
      delay: 4000,
    },
    navigation: {
      nextEl: intro.querySelector('.js-next-slide'),
      prevEl: intro.querySelector('.js-prev-slide'),
    },
    pagination: {
      el: intro.querySelector('.swiper-pagination-bullets'),
      type: "bullets",
      clickable: true
    },
    on: {
      init(swiper) {
        updateFraction(swiper.activeIndex + 1, swiper.slides.length);
      },
      slideChange(swiper) {
        updateFraction(swiper.activeIndex + 1, swiper.slides.length);
      }
    }
  })

  window.rdv_API.swipers.push(swiper);

  function updateFraction(currentNumber, totalNumber) {
    const pagination = intro.querySelector('.swiper-pagination');
    const currentSlide = pagination.querySelector('.swiper-pagination-current');
    const totalSlide = pagination.querySelector('.swiper-pagination-total');

    currentSlide.textContent = currentNumber > 9 ? currentNumber : '0' + currentNumber;
    totalSlide.textContent = totalNumber > 9 ? totalNumber : '0' + totalNumber;
  }
}
