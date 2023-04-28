import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function vacancyOtherSlider() {
  const section = document.querySelector('.vacancy-other');
  if (!section) return

  const swiper = new Swiper('.vacancy-other__slider', {
    slidesPerView: 1,
    spaceBetween: 24,
    breakpoints: {
      769: {
        slidesPerView: 2
      }
    },
    autoHeight: true,
    navigation: {
      prevEl: section.querySelector('.js-prev-slide'),
      nextEl: section.querySelector('.js-next-slide'),
    },
    pagination: {
      el: section.querySelector('.swiper-pagination-bullets')
    }
  })
}
