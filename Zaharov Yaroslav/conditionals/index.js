// 1. Создать программу в которой сравнивается возраст
// двух человек (Федота и Митрофана).
// Если возраст Федота больше чем возраст Митрофана,
// то должно выводится сообщение, в котором указана
// разница в возрасте: «Федот старше Митрофана на 3 ».
// Если возраст Митрофана больше, то выводится такое
// сообщение: «Митрофан старше Федота на 5».
// Если возраст обоих человек один и тот же, то
// выводится такое сообщение: «Федот и Митрофан
// одного возраста».

let Fedot = prompt("enter  you age");
let Mitrofan = prompt("enter  you age");
let ageDiferenceFedot = Fedot - Mitrofan;
let ageDiferenceMitrofan = Mitrofan - Fedot;

if (Fedot === null || Mitrofan === null) {
  alert("you cancelled!");
  Fedot = Number(Fedot);
  Mitrofan = Number(Mitrofan);
} else {
  if (isNaN(Fedot) || isNaN(Mitrofan)) {
    alert("enter numbers!");
  } else if (Fedot > Mitrofan) {
    console.log(`Федот старше Митрофана на ${ageDiferenceFedot}`);
  } else if (Mitrofan > Fedot) {
    console.log(`Митрофан старше Федота на  ${ageDiferenceMitrofan}`);
  } else if (Mitrofan === Fedot) {
    console.log("«Федот и Митрофан одного возраста");
  }
}

// 2. Пользователь вводит ТРИ числа
// вывести в консоль наибольшее из них

let NumberX = prompt("enter number");
let NumberY = prompt("enter number");
let NumberZ = prompt("enter number");
if (NumberX > NumberY && NumberX > NumberZ) {
  console.log(NumberX);
}
if (NumberY > NumberZ && NumberY > NumberX) {
  console.log(NumberY);
}
if (NumberZ > NumberX && NumberZ > NumberY) {
  console.log(NumberZ);
}
