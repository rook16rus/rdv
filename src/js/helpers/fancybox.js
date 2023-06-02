import {Fancybox} from '@fancyapps/ui';
import {disableScroll, enableScroll} from "./disableScroll";

export default function fancybox() {
  const fancyboxElements = document.querySelectorAll('*[data-fancybox]');

  fancyboxElements.forEach(item => {
    item.dataset.src = item.getAttribute("href");
  })

  Fancybox.bind(fancyboxElements, {
    Images: {
      zoom: false
    },
    on: {
      init: (fancybox) => {
        disableScroll()
      },
      destroy: () => {
        enableScroll()
      }
    }
  })
}
