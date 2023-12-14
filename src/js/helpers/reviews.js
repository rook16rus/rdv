import Swiper from "swiper/swiper-bundle";

export default function reviews() {
  if (window.matchMedia('only screen and (max-width: 768px)').matches) {
    const containers = document.querySelectorAll('.js-reviews-slider');
    containers.forEach(container => {
      new Swiper(container, {
        slidesPerView: 1,
        spaceBetween: 16,
      })
    })
  }
}
