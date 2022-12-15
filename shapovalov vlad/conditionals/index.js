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

// let fedotAge = prompt("Please, enter Fedot's age");
// let mitrofanAge = prompt("Please, enter Mitrofan's age");

// if (fedotAge === null || mitrofanAge === null) {
//   alert("you cancelled!");
// } else {
//   fedotAge = Number(fedotAge);
//   mitrofanAge = Number(mitrofanAge);

//   if (isNaN(fedotAge) || isNaN(mitrofanAge)) {
//     alert("enter numbers!");
//   } else if (fedotAge > mitrofanAge) {
//     ageDifference = fedotAge - mitrofanAge;
//     console.log("Fedot is " + ageDifference + " years older than Mitrofan");
//   } else if (mitrofanAge > fedotAge) {
//     ageDifference = mitrofanAge - fedotAge;
//     console.log("Mitrofan is " + ageDifference + " years older than Fedot");
//   } else {
//     console.log("They are the same age");
//   }
// }

// 2. Пользователь вводит ТРИ числа
// вывести в консоль наибольшее из них

// let numberOne = prompt("Please, enter the first number...");
// let numberTwo = prompt("Please, enter the second number...");
// let numberThree = prompt("Please, enter the third number...");

// if (numberOne === null || numberTwo === null || numberThree === null) {
//   alert("you cancelled!");
// } else {
//   numberOne = Number(numberOne);
//   numberTwo = Number(numberTwo);
//   numberThree = Number(numberThree);
// }
// if (isNaN(numberOne) || isNaN(numberTwo) || isNaN(numberThree)) {
//   alert("enter numbers!");
// } else {
//   if (numberOne > numberTwo && numberOne > numberThree) {
//     console.log("The largest of entered number is - " + numberOne);
//   } else if (numberTwo > numberOne && numberTwo > numberThree) {
//     console.log("The largest of entered number is - " + numberTwo);
//   } else if (numberThree > numberOne && numberThree > numberTwo) {
//     console.log("The largest of entered number is - " + numberThree);
//   } else {
//     console.log("These numbers are equal.");
//   }
// }
