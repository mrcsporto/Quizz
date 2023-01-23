users = JSON.parse(localStorage.getItem("users"))
let sortedUsers = users.sort((a, b) => b.score - a.score)

const $tableP = document.getElementById('tablePro');
$tableP.insertAdjacentHTML('afterbegin', createTable());

const $tableA = document.getElementById('tableAca');
$tableA.insertAdjacentHTML('afterbegin', createTableAca());

function createTableRow(data) {
  const arr = data.map(value => { return `<td>${value}</td>`; });
  return `<tr>${arr.join('')}</tr>`;
}
function createTable() {
  const tableRows = users.map((value, i) => {
    if (users[i].profession === "profissional"){
      return createTableRow([users[i].name, users[i].profession, users[i].score]);
    }
  });

  return `
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Ocupação</td>
            <td>Pontos</td>
          </tr>
        </thead>
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;
}

function createTableAca() {
  const tableRows = users.map((value, i) => {
    if (users[i].profession === "academico"){
      return createTableRow([users[i].name, users[i].profession, users[i].score]);
    }
  });

  return `
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Ocupação</td>
            <td>Pontos</td>
          </tr>
        </thead>
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;
}