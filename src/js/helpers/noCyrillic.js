export default function noCyrillic() {
  const inputs = document.querySelectorAll('input');

  inputs.forEach(input => {
    input.addEventListener('keypress', (event) => {
      if (input.getAttribute("type") === 'email') {
        if (event.key.match(/^[\u0400-\u04FF]+$/)) {
          event.preventDefault();
        }
      }
    })
  })
}
