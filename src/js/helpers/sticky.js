import 'sticksy'

export default function sticky() {
  const elements = document.querySelectorAll('.js-sticky-widget');

  elements.forEach(element => {
    const stickyEl = new Sticksy(element, { topSpacing: 200, listen: true });
  })
}

window.initSticky = sticky;
