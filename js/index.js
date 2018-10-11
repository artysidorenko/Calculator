
let result = null;


/*********************************************************/
/* Calculator functions: */
/*********************************************************/



function zero(func)   { return func ? func(0) : 0; };
function one(func)    { return func ? func(1) : 1; };
function two(func)    { return func ? func(2) : 2; };
function three(func)  { return func ? func(3) : 3; };
function four(func)   { return func ? func(4) : 4; };
function five(func)   { return func ? func(5) : 5; };
function six(func)    { return func ? func(6) : 6; };
function seven(func)  { return func ? func(7) : 7; };
function eight(func)  { return func ? func(8) : 8; };
function nine(func)   { return func ? func(9) : 9; };


function plus( b )      { return function( a ) { return a + b; }; };
function minus( b )     { return function( a ) { return a - b; }; };
function times( b )     { return function( a ) { return a * b; }; };
function dividedBy( b ) { return function( a ) { return a / b; }; };


/*********************************************************/
/* DOM Event Listeners */
/*********************************************************/

let calcScreen = document.getElementById("calc_screen");
//document.addEvenListener("click", ()=>calc_screen.innerHTML = result);


let BtnZero = document.getElementById("0");
let BtnOne = document.getElementById("1");
let BtnTwo = document.getElementById("2");
let BtnThree = document.getElementById("3");
let BtnFour = document.getElementById("4");
let BtnFive = document.getElementById("5");
let BtnSix = document.getElementById("6");
let BtnSeven = document.getElementById("7");
let BtnEight = document.getElementById("8");
let BtnNine = document.getElementById("9");

BtnZero.addEvenListener("click", function(){calcScreen.innerHTML='0'});
BtnOne.addEvenListener("click", function(){calcScreen.innerHTML='1'});

/*function calcPrintZero()  {result==null? result=zero():result=zero(result); calcScreen.innerHTML='0';};

document.BtnZero.addEvenListener("click", calcPrintZero);
document.BtnOne.addEvenListener("click", ()=>result = one(result));
document.BtnTwo.addEvenListener("click", ()=>result = two(result));
document.BtnThree.addEvenListener("click", ()=>result = three(result));
document.BtnFour.addEvenListener("click", ()=>result = four(result));
document.BtnFive.addEvenListener("click", ()=>result = five(result));
document.BtnSix.addEvenListener("click", ()=>result = six(result));
document.BtnSeven.addEvenListener("click", ()=>result = seven(result));
document.BtnEight.addEvenListener("click", ()=>result = eight(result));
document.BtnNine.addEvenListener("click", ()=>result = nine(result));






let BtnDEL = document.getElementById("DEL");
let BtnAC = document.getElementById("AC");
let BtnTimes = document.getElementById("Times");
let BtnDivided = document.getElementById("DvidedBy");
let BtnPlus = document.getElementById("Plus");
let BtnMinus = document.getElementById("Minus");
let BtnDot = document.getElementById("Dot");
let BtnAns = document.getElementById("Ans");
let BtnEquals = document.getElementById("Equals");


*/