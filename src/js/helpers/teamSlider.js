import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode])

export default function teamSlider() {
  const section = document.querySelector('.team');
  if (!section) return

  const swiper = new Swiper(".team__slider", {
    slidesPerView: 2,
    slidesPerGroup: 2,
    spaceBetween: 4,
    grid: {
      rows: 2,
      fill: 'row'
    },
    pagination: {
      el: section.querySelector('.swiper-pagination-bullets'),
      type: 'bullets',
      clickable: true
    },
    breakpoints: {
      641: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        spaceBetween: 10,
        grid: {
          rows: 2,
          fill: 'row'
        },
      },
      769: {
        slidesPerView: 4,
        slidesPerGroup: 4,
        spaceBetween: 18,
        grid: {
          rows: 3,
          fill: 'row'
        },
      },
      1025: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        spaceBetween: 32,
        grid: {
          rows: 3,
          fill: 'row'
        },
      }
    }
  })
}
