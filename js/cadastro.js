users = JSON.parse(localStorage.getItem("users"))
let sortedUsers = users.sort((a, b) => b.score - a.score)

const $table = document.getElementById('table');
$table.insertAdjacentHTML('afterbegin', createTable());

function createTableRow(data) {
  const arr = data.map(value => { return `<td>${value}</td>`; });
  return `<tr>${arr.join('')}</tr>`;
}

function createTable() {
  const tableRows = users.map((value, i) => {
    return createTableRow([users[i].name, users[i].cpf, users[i].phone, users[i].score]);
  });

  return `
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>CPF</td>
            <td>Telefone</td>
            <td>Pontos</td>
          </tr>
        </thead>
        <tbody>
          ${tableRows.join('')}
        </tbody>
      </table>
    `;
}



function exportTableToCsv() {
  var table = document.getElementById("table");
  var csv = [];
  var rows = table.rows;
  for (var i = 0; i < rows.length; i++) {
    var row = [], cols = rows[i].cells;
    for (var j = 0; j < cols.length; j++) {
      row.push(cols[j].innerText);
    }
    csv.push(row.join(","));
  }

  var currentDate = new Date();
  var year = currentDate.getFullYear();
  var month = currentDate.getMonth() + 1;
  var day = currentDate.getDate();
  var hour = currentDate.getHours();
  var minute = currentDate.getMinutes();
  var second = currentDate.getSeconds();
  var fileName = "table-" + year + "-" + month + "-" + day + "-" + hour + "-" + minute + "-" + second + ".csv";

  var csvFile;
  var downloadLink;
  csvFile = new Blob([csv.join("\n")], { type: "text/csv" });
  downloadLink = document.createElement("a");
  downloadLink.download = fileName;;
  downloadLink.href = window.URL.createObjectURL(csvFile);
  downloadLink.style.display = "none";
  document.body.appendChild(downloadLink);
  downloadLink.click();

  // setInterval(function () {
  //   downloadLink.click();
  // }, 9000000);

}



