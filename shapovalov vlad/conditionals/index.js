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

// let FedotAge = prompt("Please, enter Fedot's age");
// let MitrofanAge = prompt("Please, enter Mitrofan's age");

// if (FedotAge === null || MitrofanAge === null) {
//   alert("you cancelled!");
// } else {
//   FedotAge = Number(FedotAge);
//   MitrofanAge = Number(MitrofanAge);

//   if (isNaN(FedotAge) || isNaN(MitrofanAge)) {
//     alert("enter numbers!");
//   } else if (FedotAge > MitrofanAge) {
//     ageDifference = FedotAge - MitrofanAge;
//     console.log("Fedot is " + ageDifference + " years older than Mitrofan");
//   } else if (MitrofanAge > FedotAge) {
//     ageDifference = MitrofanAge - FedotAge;
//     console.log("Mitrofan is " + ageDifference + " years older than Fedot");
//   } else {
//     console.log("They are the same age");
//   }
// }

// 2. Пользователь вводит ТРИ числа
// вывести в консоль наибольшее из них

let numberOne = prompt("Please, enter the first number...");
let numberTwo = prompt("Please, enter the second number...");
let numberThree = prompt("Please, enter the third number...");

if (numberOne === null || numberTwo === null || numberThree === null) {
  alert("you cancelled!");
} else {
  numberOne = Number(numberOne);
  numberTwo = Number(numberTwo);
  numberThree = Number(numberThree);

  if (isNaN(numberOne) || isNaN(numberTwo) || isNaN(numberThree)) {
    alert("enter numbers!");
  } else {
    switch (true) {
      case numberOne > numberTwo && numberOne > numberThree:
        console.log("The largest of entered number is - " + numberOne);
        break;
      case numberTwo > numberOne && numberTwo > numberThree:
        console.log("The largest of entered number is - " + numberTwo);
        break;
      case numberThree > numberOne && numberThree > numberTwo:
        console.log("The largest of entered number is - " + numberThree);
        break;
      default:
        console.log("These numbers are equal.");
    }
  }
}
