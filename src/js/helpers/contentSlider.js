import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function contentSlider() {
  const contentSlider = document.querySelector('.content-slider');
  if (!contentSlider) return

  const swiper = new Swiper(contentSlider, {
    slidesPerView: 2,
    spaceBetween: 32,
    navigation: {
      nextEl: contentSlider.querySelector('.js-next-slide'),
      prevEl: contentSlider.querySelector('.js-prev-slide')
    }
  })
}
