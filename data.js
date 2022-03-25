const formEl = document.querySelector("form");
const tbodyEl = document.querySelector("tbody");
const tableEl = document.querySelector("table");
function onAddWebsite(e) {
  e.preventDefault();
  const ten = document.getElementById("name1").value;
  const code = document.getElementById("name2").value;
  const discord = document.getElementById("name3").value;
  const anh = document.getElementById("name4").value;
  tbodyEl.innerHTML += `
      <tr>
          <td>${ten}</td>
          <td>${code}</td>
          <td>${discord}</td>
          <td>${anh}</td>
          <td><button class="deleteBtn">Delete</button></td>
      </tr>
  `;
}

function onDeleteRow(e) {
  if (!e.target.classList.contains("deleteBtn")) {
    return;
  }

  const btn = e.target;
  btn.closest("tr").remove();
}

formEl.addEventListener("submit", onAddWebsite);
tableEl.addEventListener("click", onDeleteRow);