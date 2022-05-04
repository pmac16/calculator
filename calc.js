let prevVal = "";
let newVal = "";
let resultVal = "";
let mathOperator = "";

//what happens if someone clicks on the decimal button more than one time?
let decimalClicked = false;
let valMemStored = "";

function numButPress(num) {
  let prevVal = "";
  let newVal = "";
  let resultVal = "";
  let mathOperator = "";
  let decimalClicked = false;
  let valMemStored = "";

  //change the entry value to 0
  document.getElementById("entry").value = "0";
}
//its going to receive a number, we want everything to clear and start with new values

function mathButPress(operator) {}

function equalButPress(num) {}

function clearButPress() {}

function copyButPres(num) {
  valMemStored = document.getElementById("entry").value;
}

function pasteButPres(num) {
  if (valMemStored) {
    document.getElementById("entry").value = valMemStored;
    newVal = valMemStored;
  }
}
