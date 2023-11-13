import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function speakersSlider() {
  const speakers = document.querySelectorAll('.speakers');

  speakers.forEach(element => {
    const swiper = new Swiper(element, {
      slidesPerView: "auto",
      spaceBetween: 0,
      navigation: {
        nextEl: element.querySelector('.js-next-slide'),
        prevEl: element.querySelector('.js-prev-slide')
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

    window.rdv_API.swipers.push(swiper);
  })
}
