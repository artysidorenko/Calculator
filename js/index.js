var calcMemory = 0.0;
var calcEntry = 0.0;
var activeOperator = null;
var operators = ["+", "-", "X", "/"];
var result = 0;
var status;

//TO DO FIX JAVASCRIPT ROUNDING ERROR
function plusFunc()  {
  return ((1000000*calcMemory) + (1000000*calcEntry))/1000000;};
function minusFunc()  {return ((1000000*calcMemory) - (1000000*calcEntry))/1000000;};
function timesFunc()  {return ((1000*calcMemory) * (1000*calcEntry))/1000000;};
function dividedFunc() {return ((1000000*calcMemory) / (1000000*calcEntry));};
    
function numEntry(x) {
  if (activeOperator == null) {
    let temp = calcEntry.toString() + x.toString();
    calcEntry = parseFloat(temp);
    document.getElementById("screen").innerText = calcEntry;
  }
  else if (activeOperator == "Ans" || result != 0 && status == "first entry") {
    calcMemory = result;
    let temp = x.toString();
    calcEntry = parseFloat(temp);
    document.getElementById("screen").innerText = calcEntry;
    status = "done";
    activeOperator = null;
  }
  else {
    let temp = calcEntry.toString() + x.toString();
    calcEntry = parseFloat(temp);
    document.getElementById("screen").innerText = calcEntry;
  }
}

function numDelete() {
  if (activeOperator == null) {
    var string = calcEntry.toString();
    var temp = string.slice(0, string.length-1);
    calcEntry = parseFloat(temp);
    document.getElementById("screen").innerText = calcEntry;
  }
  else {
    activeOperator = null;
    document.getElementById("miniscreen").innerText = activeOperator;
  }
}

function allDelete()  {
  document.getElementById("screen").innerText = "";
  calcMemory = 0;
  calcEntry = 0;
  result = 0;
  activeOperator = null;
  document.getElementById("miniscreen").innerText = activeOperator;
}

function addDecimalPoint(x) {
  var tempString = calcEntry.toString() + x;
  calcEntry = tempString;
  document.getElementById("screen").innerText = calcEntry;
}


function operatorEntry(x) {
  if (activeOperator != null && activeOperator != "Ans") {
    executeCalc();
    activeOperator = null;
    operatorEntry(x);
    }
  else {
    if (result==0) {calcMemory = parseFloat(calcEntry);}
    else {calcMemory = result;}
    calcEntry = 0.0;
    activeOperator = x;
    document.getElementById("miniscreen").innerText = x;
    status = "done";
  }
}

function executeCalc()  {
  calcEntry= parseFloat(calcEntry);
  if (activeOperator != null) {
    if (activeOperator == "+")  {result = plusFunc();}
    else if (activeOperator == "-")  {result = minusFunc();}
    else if (activeOperator == "X")  {result = timesFunc();}
    else if (activeOperator == "/")  {result = dividedFunc();}
    else {result = "error";}
    document.getElementById("screen").innerText = Math.round(1000*result)/1000;
    activeOperator = "Ans";
    document.getElementById("miniscreen").innerText = "";
    status = "first entry";
    calcMemory = result;
  }
}



//Attach Event Listeners to Virtual Calculator Buttons

document.addEventListener("DOMContentLoaded", function(event) { 


  for (var x=0; x<10; x++)  {
    let temp = x;
    document.getElementById(temp).addEventListener("click", function() {numEntry(temp)});
  }

  document.getElementById(".").addEventListener("click", function() {addDecimalPoint(".")});
  document.getElementById("DEL").addEventListener("click", function() {numDelete()});

  for (var y in operators)  {
    let temp = operators[y];
    document.getElementById(temp).addEventListener("click", function() {operatorEntry(temp);});
    calcMemory = calcEntry;
    calcEntry = 0;
  }

  document.getElementById("Ans").addEventListener("click", function() {
    document.getElementById("screen").innerText = calcMemory;
  });

  document.getElementById("AC").addEventListener("click", function() {allDelete();});
  document.getElementById("=").addEventListener("click", function() {executeCalc();});
  
//Attach Event Listeners to KeyCodes
  
  for (var x=48; x<58; x++)  {
    let temp = x;
    document.addEventListener('keypress', function (e) {
    let key = e.which || e.keyCode;
    if (key === temp) { numEntry(String.fromCharCode(temp)) }
});
  }

  document.addEventListener("keypress", function(e) {
    let key = e.which || e.keyCode;
    if (key == 46) {addDecimalPoint(".")}
    if (key == 127 || key == 8) {numDelete()}
    if (key == 43) {operatorEntry("+")}
    if (key == 45) {operatorEntry("-")}
    if (key == 42) {operatorEntry("X")}
    if (key == 47) {operatorEntry("/")}
    if (key == 27) {allDelete()}
    if (key == 61 || key == 13) {executeCalc();}
  });
  
});