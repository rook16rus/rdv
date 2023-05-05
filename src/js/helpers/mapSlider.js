import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function mapSlider() {
  const contacts = document.querySelector('.contacts');
  if (!contacts) return

  const swiper = new Swiper('.contacts__card-slider', {
    slidesPerView: 1,
    effect: "fade",
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: contacts.querySelector('.swiper-pagination-bullets'),
      type: 'bullets',
      clickable: true
    }
  })

  window.rdv_API.swipers.push(swiper);
}
