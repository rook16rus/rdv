import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function speakersSlider() {
  const speakers = document.querySelector('.speakers');
  if (!speakers) return

  const swiper = new Swiper('.speakers', {
    slidesPerView: 6,
    spaceBetween: 32,
    navigation: {
      nextEl: speakers.querySelector('.js-next-slide'),
      prevEl: speakers.querySelector('.js-prev-slide')
    }
  })
}
