export default function tabs() {
  const tabsContainers = document.querySelectorAll('.js-tabs-container');

  tabsContainers.forEach(tabsContainer => {
    let contents = tabsContainer.querySelectorAll('.js-tab-content');
    contents = [...contents].filter(content => content.closest('.js-tabs-container').innerHTML === tabsContainer.innerHTML)

    let tabs = tabsContainer.querySelectorAll('.js-tab');
    tabs = [...tabs].filter(tab => tab.closest('.js-tabs-container').innerHTML === tabsContainer.innerHTML)

    let scroll = tabsContainer.querySelector('.js-tabs-scroll');
    scroll = scroll.closest('.js-tabs-container').innerHTML === tabsContainer.innerHTML ?
      tabsContainer.querySelector('.js-tabs-scroll') :
      null;

    if (scroll) scroll.style.setProperty('--active-tab-width', tabs[0].clientWidth / 10 + 'rem');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabActivate(tab.dataset.href, tab);
      })
    })

    function tabActivate(id, tab) {
      if (tab.classList.contains('tab-active')) {
        tab.classList.remove('tab-active');
      } else {
        tabs.forEach((tab) => {
          if (tab.dataset.href === id) {
            tab.classList.add('tab-active');
          } else {
            tab.classList.remove('tab-active');
          }
        });
      }

      contents.forEach(tabContent => {
        if (tabContent.dataset.id === id) {
          if (tabContent.classList.contains('active')) {
            tabContent.classList.remove('active')
          } else {
            tabContent.classList.add('active')
          }
        } else {
          tabContent.classList.remove('active')
        }
      })

      if (scroll) {
        scroll.style.setProperty('--active-tab-offset', tab.offsetLeft / 10 + 'rem');
        scroll.style.setProperty('--active-tab-width', tab.clientWidth / 10 + 'rem');
      }
    }
  })
}
