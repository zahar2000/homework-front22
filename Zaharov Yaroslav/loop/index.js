// 1. Написать программу, которая вычисляет сумму чисел от 1 до n. Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы оно не было меньше 1, чтобы это было не null).

// let Number_n = prompt("Enter a number > 0");

// if (!isNaN(Number_n) && Number_n === null && Number_n >= 1);
// {
//   let Summa = 0;
//   for (let All_Numbers = 1; All_Numbers <= Number_n; All_Numbers++) {
//     Summa = Summa + All_Numbers;
//   }
//   console.log(`Сумма от 1 до ${Number_n} равно ${Summa}`);
// }

// 2. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let NumberTimesInput = prompt("Enter you numbers");
// NumbersPlus = 0;
// NumbersMinus = 0;
// NumbersZero = 0;

// for (let x = 1; x <= NumberTimesInput; x++) {
//   let = You_Numbers = prompt("Enter you numbers");
//   if (You_Numbers > 0) {
//     NumbersPlus++;
//   }
//   if (You_Numbers < 0) {
//     NumbersMinus++;
//   }
//   if (You_Numbers === 0) {
//     NumbersZero++;
//   }
// }
// console.log("положительных:" + NumbersPlus);
// console.log("отрицательных:" + NumbersMinus);
// console.log("нулей:" + NumbersZero);

// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// for (let x = 10; x < 30; x++) {
//   if (x % 4 === 0) {
//     console.log(x);
//   }
//   if (x % 6 !== 0) {
//     console.log;
//     x;
//   }
// }

// 4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

let sum = 0;
let Numbers_Times = 0;

for (let i = 0; ; ) {
  let Number_user = prompt("enter  you numbers");
  if (Number_user === null) {
    break;
  }
  Number_user = +Number_user;
  sum += Number_user;
  Numbers_Times++;
}
console.log("average" + sum / Numbers_Times);
