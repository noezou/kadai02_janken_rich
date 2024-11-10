let participants = [];
let roles = ["speaker", "listener", "observer"];
let currentRound = 0;
let groupAssignments = [];

function generateGrid() {
  const numParticipants = parseInt(
    document.getElementById("numParticipants").value
  );
  if (isNaN(numParticipants) || numParticipants % 3 !== 0) {
    alert("3の倍数を入力してください。");
    return;
  }

  const tableRows = numParticipants / 3;
  const tableCols = 3;
  let numbers = Array.from({ length: numParticipants }, (_, i) => i + 1);

  // ランダムに並べ替える
  numbers = numbers.sort(() => Math.random() - 0.5);

  // 表を生成
  // ID値 tableContainer に一致する要素を返す
  const tableContainer = document.getElementById("tableContainer");
  tableContainer.innerHTML = "";
  // 表の中身をクリア
  // document.createElement(tagName) 引数のtagNameで指定されたHTML要素を生成する
  const table = document.createElement("table"); // table要素を生成
  table.style.borderCollapse = "collapse";
  table.id = "generatedTable"; // テーブルにIDを付与
  // 表を書く
  let count = 0;
  for (let i = 0; i < tableRows; i++) {
    const row = document.createElement("tr");
    for (let j = 0; j < tableCols; j++) {
      const cell = document.createElement("td");
      cell.style.border = "1px solid black";
      cell.style.padding = "10px";
      cell.style.textAlign = "center";
      cell.innerHTML = numbers[count++];
      row.appendChild(cell); // cellの最後の要素としてrowに追加
    }
    table.appendChild(row); // rowの最後の要素としてtableに追加
  }
  tableContainer.appendChild(table); // 表をtableContainerに追加
}

// 2回目
function shiftSecondColumn() {
  // ID値 tableContainer2 に一致する要素を返す
  const table = document.getElementById("generatedTable");
  if (!table) return;
  const rows = Array.from(table.rows);
  const secondColumnValues = rows.map((row) => row.cells[1].textContent);

  // 2列目の値を一つ下にシフト（最後の値は最初に移動）
  secondColumnValues.unshift(secondColumnValues.pop());

  // シフト後の値を2列目に設定
  rows.forEach((row, i) => {
    row.cells[1].textContent = secondColumnValues[i];
  });
}

// 3回目
function shiftThirdColumn() {
  const table = document.getElementById("generatedTable");
  if (!table) return;

  const rows = Array.from(table.rows);
  const thirdColumnValues = rows.map((row) => row.cells[2].textContent);

  // 3列目の値を一つ上にシフト（最初の値は最後に移動）
  thirdColumnValues.push(thirdColumnValues.shift());

  // シフト後の値を3列目に設定
  rows.forEach((row, i) => {
    row.cells[2].textContent = thirdColumnValues[i];
  });
}
