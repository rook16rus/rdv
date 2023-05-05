import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function integrationEffectSlider() {
  const sliders = document.querySelectorAll('.integration-effect__slider');

  sliders.forEach(slider => {
    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 16,
      navigation: {
        nextEl: slider.querySelector('.slider-navigation .js-next-slide'),
        prevEl: slider.querySelector('.slider-navigation .js-prev-slide')
      },
      pagination: {
        type: "bullets",
        el: slider.querySelector('.swiper-pagination-bullets'),
        clickable: true
      },
      breakpoints: {
        769: {
          slidesPerView: 2,
        }
      }
    })

    window.rdv_API.swipers.push(swiper)
  })
}
