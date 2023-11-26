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
import fileInputs from "./helpers/fileInputs";
import alignHeights from "./modules/alignHeights";
import inputPlaceholder from "./helpers/inputPlaceholder";
import customSelects from "./helpers/customSelects";
import accordions from "./helpers/accordions";
import introSlider from "./helpers/introSlider";
import moreButton from "./helpers/moreButton";
import infinitySlider from "./helpers/infinitySlider";
import header from "./helpers/header";
import moreButtonRow from "./helpers/moreButtonRow";
import tabs from "./helpers/tabs";
import catalogModal from "./helpers/catalogModal";
import catalogAdaptive from "./helpers/catalogAdaptive";
import backgroundWebp from "./helpers/backgroundWebp";
import speakersSlider from "./helpers/speakersSlider";
import contentSlider from "./helpers/contentSlider";
import simpleBar from "./helpers/simpleBar";
import fixedModalButtons from "./helpers/fixedModalButtons";
import registrationForm from "./helpers/registrationForm";
import moreText from "./helpers/moreText";
import copyLink from "./helpers/copyLink";
import isAdminMod from "./helpers/isAdminMod";
import mapSlider from "./helpers/mapSlider";
import contactsMap from "./helpers/contactsMap";
import integrationEffectSlider from "./helpers/integrationEffectSlider";
import sticky from "./helpers/sticky";
import vacancyOtherSlider from "./helpers/vacancyOtherSlider";
import resetButtons from "./helpers/resetButtons";
import teamSlider from "./helpers/teamSlider";
import copyRequisites from "./helpers/copyRequisites";
import teamCardTips from "./helpers/teamCardTips";
import projectsSearch from "./helpers/projectsSearch";
import projectsReset from "./helpers/projectsReset";
import decisionMore from "./helpers/decisionMore";
import optimizationSection from "./helpers/optimizationSection";
import noDigits from "./helpers/noDigits";
import noCyrillic from "./helpers/noCyrillic";
import adaptiveTables from "./modules/adaptiveTables";

documenReady(() => {
  window.rdv_API = { };
  window.rdv_API.swipers = [];
  window.rdv_API.tabs = {}
  window.savedWidth = document.documentElement.clientWidth;
  window.initRegistrationForm = registrationForm;

  lazyIMages();
  initModal();
  initSliders();

  detectTouch();
  setScrollbarWidth();
  anchorLinks();
  validation();
  masks();
  fancybox();
  fileInputs();
  inputPlaceholder();
  customSelects();
  accordions();
  introSlider();
  infinitySlider();
  header();
  tabs();
  catalogModal();
  catalogAdaptive();
  backgroundWebp();
  speakersSlider();
  contentSlider();
  simpleBar();
  fixedModalButtons();
  copyLink();
  mapSlider();
  contactsMap();
  integrationEffectSlider();
  sticky();
  vacancyOtherSlider();
  resetButtons();
  teamSlider();
  copyRequisites();
  teamCardTips();
  projectsSearch();
  projectsReset();
  decisionMore();
  optimizationSection();
  noDigits();
  noCyrillic();
});

document.fonts.ready.then((res) => {
  alignHeights('.cooperation__list', '.cooperation__item-text', true);
  alignHeights('.about-features__directions', '.about-features__direction-top', true);
  alignHeights('.cards-section', '.partners-card__title', true);
  alignHeights('.decision__list', '.decision__item-title', true);
  alignHeights('.about-mission__list', '.about-mission__item-title', true);
  moreButtonRow();
  moreButton();
  moreText();
})

window.addEventListener('load', function () {
  document.body.classList.add('loaded');
  isAdminMod();

  setTimeout(() => {
    document.body.classList.add('animatable')
  }, 300);
});

window.addEventListener('resize', () => {
  if (document.documentElement.clientWidth !== window.savedWidth) {
    window.savedWidth = document.documentElement.clientWidth;
    moreButtonRow();
    catalogAdaptive();
    optimizationSection();
  }
})
