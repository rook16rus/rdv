export default function tabs() {
  const tabsContainers = document.querySelectorAll('.js-tabs-container');

  tabsContainers.forEach(tabsContainer => {
    const contents = tabsContainer.querySelectorAll('.js-tab-content');

    let tabs = tabsContainer.querySelectorAll('.js-tab');
    tabs = [...tabs].filter(tab => tab.closest('.js-tabs-container').innerHTML === tabsContainer.innerHTML)

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
    }
  })
}
