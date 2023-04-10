import loadApi from "./loadApi";

export default function contactsMap() {
  let map = document.querySelector('#map');
  if (!map) return;

  const url = `https://api-maps.yandex.ru/2.1/?apikey=${map.dataset.apiKey}&lang=ru_RU`;
  loadApi('yandex', url, () => {
    ymaps.ready(init);
  })

  function init() {
    const mapElement = document.querySelector('#map');
    const zoom = mapElement.dataset.zoom;
    const marker = mapElement.dataset.marker;
    const coords = mapElement.dataset.coordinates.split(',');

    map = new ymaps.Map('map', {
      center: [+coords[0], +coords[1] + 0.0002],
      zoom
    }, {
      searchControlProvider: "yandex#search",
      suppressMapOpenBlock: true
    });

    map.controls.remove('geolocationControl'); // удаляем геолокацию
    map.controls.remove('searchControl'); // удаляем поиск
    map.controls.remove('trafficControl'); // удаляем контроль трафика
    map.controls.remove('typeSelector'); // удаляем тип
    map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим
    map.controls.remove('rulerControl'); // удаляем контрол правил
    map.controls.remove('zoomControl'); // удаляем контрол зума

    addMarker([...coords], map, marker);
  }

  function addMarker(coords, map, markerIcon) {
    const marker = new ymaps.Placemark(coords, {}, {
      iconLayout: 'default#image',
      iconImageHref: markerIcon,
      iconImageSize: [64, 64],
      iconImageOffset: [-32, -32]
    });

    map.geoObjects.add(marker);
  }
}
