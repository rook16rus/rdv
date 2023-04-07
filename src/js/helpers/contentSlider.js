import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function contentSlider() {
  const contentSlider = document.querySelector('.content-slider');
  if (!contentSlider) return

  const swiper = new Swiper(contentSlider, {
    slidesPerView: 1,
    spaceBetween: 16,
    navigation: {
      nextEl: contentSlider.querySelector('.js-next-slide'),
      prevEl: contentSlider.querySelector('.js-prev-slide')
    },
    pagination: {
      el: contentSlider.querySelector('.swiper-pagination-bullets'),
      type: "bullets"
    },
    breakpoints: {
      641: {
        spaceBetween: 20
      },
      769: {
        slidesPerView: 2,
        spaceBetween: 25,
      },
      1025: {
        spaceBetween: 32,
        slidesPerView: 2,
      }
    }
  })

  window.rdv_API.swipers.push(swiper);
}
