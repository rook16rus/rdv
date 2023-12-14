import {Fancybox} from '@fancyapps/ui';
import {disableScroll, enableScroll} from "./disableScroll";

export default function fancybox() {
  if (document.body.classList.contains('is-admin')) return

  const fancyboxElements = document.querySelectorAll('a[data-fancybox]');

  fancyboxElements.forEach(item => {
    item.dataset.src = item.getAttribute("href");
    item.setAttribute("href", "#")
  })

  // Fancybox.bind(fancyboxElements, {
  //   Images: {
  //     zoom: false
  //   },
  //   on: {
  //     init: (fancybox) => {
  //       disableScroll()
  //     },
  //     destroy: () => {
  //       enableScroll()
  //     }
  //   }
  // })
}
