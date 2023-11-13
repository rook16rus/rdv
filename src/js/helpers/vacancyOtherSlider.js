import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function vacancyOtherSlider() {
  const sections = document.querySelectorAll('.vacancy-other');

  sections.forEach(section => {
    const element = section.querySelector('.vacancy-other__slider');
    const swiper = new Swiper(element, {
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
        el: section.querySelector('.swiper-pagination-bullets'),
        type: 'bullets',
        clickable: true
      }
    })
  })
}
