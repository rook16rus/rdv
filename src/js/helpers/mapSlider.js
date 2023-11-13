import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function mapSlider() {
  const contacts = document.querySelectorAll('.contacts');

  contacts.forEach(contact => {
    const element = contact.querySelector('.contacts__card-slider');
    const swiper = new Swiper(element, {
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
  })
}
