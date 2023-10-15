/**
 * @param table HTMLTableElement
 * @returns {boolean}
 */
const checkIsValid = (table) => {
  const head = table.querySelector('thead');
  const body = table.querySelector('tbody');
  if (!head || !body) return false;

  const headColumnsTH = head.querySelectorAll('tr th');
  const headColumnsTD = head.querySelectorAll('tr td');
  const headColumns = headColumnsTH.length > 0 ? headColumnsTH : headColumnsTD;
  const bodyRow = body.querySelector('tr');
  if (!bodyRow) return false;
  const bodyColumns = bodyRow.querySelectorAll('td');

  if (headColumns.length !== bodyColumns.length) return false;

  return true;
}

function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

export default function adaptiveTables() {
  const tables = document.querySelectorAll('table');
  tables.forEach(table => {
    if (!checkIsValid(table)) return;

    table.classList.add('js-table-desktop');

    const headColumns = table.querySelectorAll('thead tr > *');
    const bodyRows = table.querySelectorAll('tbody tr');

    const newTable = document.createElement('table');
    newTable.classList.add('js-table-mobile');
    bodyRows.forEach((row, rowIndex) => {
      const rowClass = (rowIndex + 1) % 2 === 0 ? 'even' : 'odd';
      const cells = row.querySelectorAll('td');
      cells.forEach((cell, cellIndex) => {
        const newRow = document.createElement('tr');
        newRow.classList.add(rowClass);

        if (cellIndex === cells.length - 1 && rowIndex !== bodyRows.length - 1) {
          newRow.classList.add('last');
        }

        const cellHead = document.createElement('th');
        cellHead.textContent = headColumns[cellIndex].textContent;
        newRow.append(cellHead);

        const cellValue = document.createElement('td');
        cellValue.textContent = cell.textContent;
        newRow.append(cellValue);

        newTable.append(newRow);
      })
    });

    insertAfter(table, newTable);
  })
}
