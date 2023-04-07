import Swiper, {Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode} from "swiper/swiper-bundle";

Swiper.use([Navigation, EffectFade, Autoplay, Pagination, HashNavigation, Grid, FreeMode]);

export default function isAdminMod() {
  if (document.body.classList.contains('is-admin')) {
    const allSwipers = window.rdv_API.swipers;

    allSwipers.forEach(swiper => {
      const swiperHtmlEl = swiper.$el[0]
      swiperHtmlEl.classList.add('swiper--admin')
      swiper.disable();
    })
  }
}
