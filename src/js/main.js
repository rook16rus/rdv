// eslint-disable-next-line import/no-extraneous-dependencies
/*import 'focus-visible';*/
import lazyIMages from './modules/lazyIMages';
import documenReady from './helpers/documenReady';
import initModal from './modules/initModal';
import './helpers/lazyload';

import detectTouch from './helpers/detectTouch';
import setScrollbarWidth from './helpers/setScrollbarWidth';
import anchorLinks from './helpers/anchorLinks';

import initSliders from "./modules/initSliders";
import fancybox from "./helpers/fancybox";
import validation from "./helpers/validation";
import masks from "./helpers/masks";
import yandexMap from "./helpers/yandexMap";
import fileInputs from "./helpers/fileInputs";
import alignHeights from "./modules/alignHeights";
import inputPlaceholder from "./helpers/inputPlaceholder";
import customSelects from "./helpers/customSelects";
import accordions from "./helpers/accordions";
import introSlider from "./helpers/introSlider";
import moreButton from "./helpers/moreButton";
import infinitySlider from "./helpers/infinitySlider";
import header from "./helpers/header";

documenReady(() => {
  window.rdv_API = { };

  lazyIMages();
  initModal();
  initSliders();

  detectTouch();
  setScrollbarWidth();
  anchorLinks();
  validation();
  masks();
  fancybox();
  yandexMap();
  fileInputs();
  inputPlaceholder();
  customSelects();
  accordions();
  introSlider();
  moreButton();
  infinitySlider();
  header();
});

document.fonts.ready.then((res) => {
  alignHeights('.cooperation__list', '.cooperation__item-text', true)
})

window.addEventListener('load', function () {
  document.body.classList.add('loaded');

  setTimeout(() => {
    document.body.classList.add('animatable')
  }, 300);
});

window.addEventListener('resize', () => {

})