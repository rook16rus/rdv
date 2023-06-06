export default function projectsSearch() {
  const search = document.querySelector('.projects__search');
  if (!search) return

  const searchInput = document.querySelector('.projects__search-input');
  const searchReset = document.querySelector('.projects__search-reset');

  document.addEventListener('mousedown', e => {
    if (e.target.closest(".projects__search-button") || e.target.closest(".projects__search-input-block")) {
      search.classList.add('active');
    } else {
      if (searchInput.value === '') search.classList.remove('active')
    }
  })

  searchReset.addEventListener('click', () => {
    searchInput.value = '';
  })
}
