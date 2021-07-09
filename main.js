let impresion = document.getElementById("result");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btn0 = document.getElementById("btn0");

const imprimir = (data) => {
    impresion.innerHTML += data;
};

btn1.onclick = function () { imprimir("1")};
btn2.onclick = function () { imprimir("2")};
btn3.onclick = function () { imprimir("3")};
btn4.onclick = function () { imprimir("4")};
btn5.onclick = function () { imprimir("5")};
btn6.onclick = function () { imprimir("6")};
btn7.onclick = function () { imprimir("7")};
btn8.onclick = function () { imprimir("8")};
btn9.onclick = function () { imprimir("9")};
btn0.onclick = function () { imprimir("0")};
