//display  todays date

var currentDay = $("#currentDay");
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
let timeVal = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
for (let i = 0; i < timeObj.length; i++) {
  let hoursRow = $("<div>");
  hoursRow.attr("class", "row");
  let hoursColumn = $("<div>");
  hoursColumn.attr("class", "column");
  hoursRow.append(hoursColumn);
  console.log(timeObj[i]);
}
