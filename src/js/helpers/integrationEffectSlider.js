import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function integrationEffectSlider() {
  const sliders = document.querySelectorAll('.integration-effect__slider');

  sliders.forEach(slider => {
    const swiper = new Swiper(slider, {
      slidesPerView: 2,
      spaceBetween: 16,
      navigation: {
        nextEl: slider.querySelector('.slider-navigation .js-next-slide'),
        prevEl: slider.querySelector('.slider-navigation .js-prev-slide')
      }
    })

    window.rdv_API.swipers.push(swiper)
  })
}
