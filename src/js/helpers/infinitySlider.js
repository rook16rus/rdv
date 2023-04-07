import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function infinitySlider() {
  const sliders = document.querySelectorAll('.js-infinity-slider');

  sliders.forEach(slider => {
    const swiper = new Swiper(slider, {
      slidesPerView: "auto",
      speed: 6000,
      loop: true,
      loopAdditionalSlides: 10,
      loopSlides: 20,
      loopedSlidesLimit: false,
      spaceBetween: 32,
      nested: true,
      freeMode: true,
      autoplay: {
        enabled: true,
        delay: 1,
        disableOnInteraction: false
      },
      breakpoints: {
        641: {
          spaceBetween: 32
        },
      }
    })

    window.rdv_API.swipers.push(swiper);
  })
}
