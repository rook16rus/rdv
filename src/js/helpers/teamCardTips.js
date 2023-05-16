export default function teamCardTips() {
  const tips = document.querySelectorAll('.team__large-item-tip');

  tips.forEach(tip => {
    const img = tip.closest('.team__large-item-img');

    tip.addEventListener('click', () => {
      img.classList.toggle('active');
    })
  })
}
