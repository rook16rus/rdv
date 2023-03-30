import canUseWebp from "./canUseWebp";

export default function backgroundWebp() {
  let images = document.querySelectorAll('[data-bg]');

  // Проверяем, является ли браузер посетителя сайта Firefox и получаем его версию
  let isitFirefox = window.navigator.userAgent.match(/Firefox\/([0-9]+)\./);
  let firefoxVer = isitFirefox ? parseInt(isitFirefox[1]) : 0;

  for (let i = 0; i < images.length; i++) {

    if (canUseWebp() || firefoxVer >= 65) {

      for (let i = 0; i < images.length; i++) {
        let imageWebp = images[i].getAttribute('data-bg-webp');

        if (imageWebp) {
          images[i].style.backgroundImage = 'url(' + imageWebp + ')';
        }
      }

    } else {
      let image = images[i].getAttribute('data-bg');
      images[i].style.backgroundImage = 'url(' + image + ')';
    }
  }
}
