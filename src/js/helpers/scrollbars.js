import SimpleBar from "simplebar";

export default function scrollbars() {
  const containers = document.querySelectorAll('.js-scrollbar');
  containers.forEach(container => {
    new SimpleBar(container);
  })

  const tables = document.querySelectorAll('.table');
  tables.forEach(table => {
    new SimpleBar(table);
  })
}
