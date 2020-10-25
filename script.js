//display  todays date

var currentDay = $("#currentDay");
var agendaInput = $("#agenda-text");

var agendaEl = [];

let m = moment();
currentDay.text(m.format("[Today is] dddd[,] MMM Mo[,] YYYY"));
var container = $(".container");

let timeObj = [
  "7 AM",
  "8 Am",
  "9 AM",
  "10AM",
  "11 AM",
  "12 PM",
  "1 PM",
  "2 PM",
  "3 PM",
  "4 PM",
  "5 PM",
  "6 PM",
  "7 PM",
];
// renderAgenda();
// init();
let timeVal = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
for (let i = 0; i < timeObj.length; i++) {
  let hoursRow = $("<div>");
  hoursRow.attr("class", "row");

  let hoursColumn = $("<div>");
  hoursColumn.attr("class", "col-2");

  hoursColumn.attr("id", timeVal[i]);
  hoursRow.append(hoursColumn);

  // console.log(timeObj[i]);

  hoursColumn.text(timeObj[i]);
  container.append(hoursRow);

  // console.log(timeVal[i]);
  let contentColumn = $("<div>");
  contentColumn.attr("class", "col-9");
  let input = $("<textarea>");
  input.attr("placeholder", "your input goes here");
  input.attr("name", "agenda-text");
  input.attr("id", "agenda-text");
  input.attr("data-index", i);
  input.attr("cols", "100");
  contentColumn.append(input);
  hoursRow.append(contentColumn);

  let saveBtnCol = $("<div>");
  saveBtnCol.attr("class", "col-1");
  hoursRow.append(saveBtnCol);

  let saveBtn = $("<button>");
  saveBtn.attr("type", "button");
  saveBtn.attr("class", "saveBtn btn btn-success");
  saveBtn.text("save");
  saveBtnCol.append(saveBtn);
}

$("button").on("click", function (event) {
  event.preventDefault();

  localStorage.setItem("agendaEl", JSON.stringify(agendaEl));
  var agendaInput = JSON.parse(localStorage.getItem("agendaEl"));
  agendaEl.push(agendaInput);
  agendaInput.value = agendaEl;
});
function agendaInput(type, text) {
  agendaInput.textContent = text;
  agendaInput.attr("class", type);
}

// function renderUserInput() {
//   var userInput = localStorage.getItem("timeVal");
//   userInput.textContent = "";
// }

//   var userInput = document.querySelector("#user-input");

//   localStorage.setItem("User-Input", JSON.stringify(userInput));
//   var userInput = JSON.parse(localStorage.getItem(userInput));
// renderUserInput();
// });
// veBtn.addEventListener("click", function (event) {
//   event.preventDefault();

//   localStorage.setItem("userInput", input);
//   renderUserInput();
// });
// function renderAgenda() {
//   for (let i = 0; agendaEl.length; i++) {
//     var agenda = agendaEl[i];
//     // var li = document.createElement("li");
//     agendaInput.textContent = agenda;
//     $("#agenda-text").attr("data-index", i);
//     // var button = document.createElement("button");
//     // button.textContent = "save";
//     // li.appendChild(button);
//   }
// }
// function init() {
//

//   if (storedAgenda !== null) {
//     agendaEl = storedAgenda;

//     renderAgenda();
//   }
// }
