/*********************************************************/
/* Cosmetic: Fix page height to viewport size and lock orientation*/
/*********************************************************/

function windowResize() {
   let wH = 0.95*window.innerHeight;
   document.getElementById("app_container").style.height = wH.toString() + "px";
   let wW = 0.95*window.innerWidth;
   document.getElementById("app_container").style.width = wW.toString() + "px";
}

windowResize();




/********************************************************/
/* Calculator variables and functions: */
/********************************************************/

//define the ultimate operation that the calculator is executing
let calcOperation = ""
let calcResult = null;



//bind variables to each subsection of the calculator screen
let stagingScreen = document.getElementById("staging_screen");
let resultScreen = document.getElementById("result_screen");
let operatorScreen = document.getElementById("operator");

//variables used for app control:
//boolean switch to wipe stagingScreen after operator is entered
let screenWipe = false;
//array with possible operators for testing purposes
let operatorArray = ["*", "/", "+", "-"];

//declare functions to enter digits

function enterDigit(i)  {
    calcOperation+=i.toString();
    if (screenWipe==false) {
        stagingScreen.innerHTML+=i.toString();
    }
    else {
        stagingScreen.innerHTML=i.toString();
        resultScreen.innerHTML="";
        if (operatorScreen.innerHTML=="=")  {operatorScreen.innerHTML="";}
        screenWipe = false;
    }
}

//declare operational functions

function enterOperator(operator)    {
    screenWipe = true;
    if (operatorArray.indexOf(calcOperation[calcOperation.length - 1]) != -1)  {
      calcOperation = calcOperation.slice(0, -1);
      calcOperation += operator;
    }
    else if (operatorArray.some((elem)=>calcOperation.includes(elem)))    {
      calcExecute();
      calcOperation = calcResult;
      calcOperation += operator;
      operatorScreen.innerHTML = operator;
      stagingScreen.innerHTML = calcResult;
    }
    else if (operatorScreen.innerHTML=="=") {
      calcOperation = calcResult;
      calcOperation += operator;
      operatorScreen.innerHTML = operator;
      stagingScreen.innerHTML = calcResult;
    }
    else if (calcOperation.length > 0)  {
      calcOperation += operator;
      operatorScreen.innerHTML = operator;
    }
}

function calcExecute() {
    calcResult = eval(calcOperation);
    resultScreen.innerHTML = calcResult;
    operatorScreen.innerHTML = "=";
    stagingScreen.innerHTML = "";
    calcOperation = "";
    screenWipe = true;
}

function calcDelete()   {
    console.log("deleting last digit");
    if (screenWipe==false)   {
        stagingScreen.innerHTML = stagingScreen.innerHTML.slice(0, -1);
        calcOperation = calcOperation.slice(0, -1);
    }
    else {
      resultScreen.innerHTML = "";
      operatorScreen.innerHTML = "";
      stagingScreen.innerHTML = "";
    }
}

function flushAll()   {
    console.log("attempting to flushAll");

    stagingScreen.innerHTML = "";
    operatorScreen.innerHTML = "";
    resultScreen.innerHTML = "";
    calcOperation = "";
    calcResult = 0;
}

function addDecimal()   {
    if (stagingScreen.innerHTML == "")  {
        calcOperation += "0.";
        stagingScreen.innerHTML += "0.";
    }
    else {
        calcOperation += ".";
        stagingScreen.innerHTML += ".";
    }
}





/*********************************************************/
/* Attach Event Listeners to DOM*/
/********************************************************/

document.addEventListener("DOMContentLoaded", function(event) {

//Attach listeners to digit clicks and keyboard digit presses//

    for (let i=0; i<10; i++)    {
        let btn = document.getElementById(i.toString());
        btn.addEventListener("click", function() {enterDigit(i)});
        document.addEventListener("keydown", function(event)    {
            if (event.keyCode == 48+i) {enterDigit(i);}
        });
    }

//Attach listeners to digit clicks and keyboard digit presses//

    document.getElementById("DEL").addEventListener("click", calcDelete);
    document.getElementById("Times").addEventListener("click", ()=>enterOperator("*"));
    document.getElementById("Divided").addEventListener("click", ()=>enterOperator("/"));
    document.getElementById("Plus").addEventListener("click", ()=>enterOperator("+"));
    document.getElementById("Minus").addEventListener("click", ()=>enterOperator("-"));
    document.getElementById("Equals").addEventListener("click", calcExecute);
    document.getElementById("AC").addEventListener("click", flushAll);
    document.getElementById("dot").addEventListener("click", addDecimal);
    document.getElementById("Ans").addEventListener("click", function() {
      if(calcResult!=null) {enterDigit(calcResult);}
    });


    document.addEventListener("keydown", function(event) {
        let key = event.which || event.keyCode;
        if (key == 8 || key == 46)  {calcDelete()}
        if (key == 106) {enterOperator("*")}
        if (key == 111) {enterOperator("/")}
        if (key == 107) {enterOperator("+")}
        if (key == 109) {enterOperator("-")}
        if (key == 187 || key == 13) {calcExecute()}
        if (key == 110 || key == 190) {addDecimal()}
    });

});
