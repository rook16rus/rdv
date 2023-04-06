import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function speakersSlider() {
  if (document.body.classList.contains('is-admin')) return;

  const speakers = document.querySelector('.speakers');
  if (!speakers) return

  const swiper = new Swiper('.speakers', {
    slidesPerView: "auto",
    spaceBetween: 0,
    navigation: {
      nextEl: speakers.querySelector('.js-next-slide'),
      prevEl: speakers.querySelector('.js-prev-slide')
    },
    breakpoints: {
      769: {
        spaceBetween: 26,
      },
      1025: {
        slidesPerView: 6,
        spaceBetween: 32
      }
    }
  })
}
