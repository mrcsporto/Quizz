users = JSON.parse(localStorage.getItem("users"))
let sortedUsers = users.sort((a, b) => b.score - a.score)

const table = document.getElementById('table');
table.insertAdjacentHTML('afterbegin', createTable());

function createTableRow(data) {
  const arr = data.map(value => { return `<td>${value}</td>`; });
  return `<tr>${arr.join('')}</tr>`;
}


function createTable() {
  let limitedArray = users.slice(0, 10);
  const tableRows = limitedArray.map((value, i) => {
    return createTableRow([users[i].name, users[i].score]);
  });

  return `
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Pontos</td>
          </tr>
        </thead>
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;
}
