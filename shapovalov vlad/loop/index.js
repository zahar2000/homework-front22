// 1. Написать программу, которая вычисляет сумму чисел от 1 до n.
// Значение n вводится с клавиатуры.
// Проверить число n на корректность (чтобы это было число, чтобы
// оно не было меньше 1, чтобы это было не null).

let n = prompt("Enter number of digits from 1 or more...");

if (n === null) {
  alert("you cancelled!");
} else {
  n = Number(n);

  if (isNaN(n) || n < 1) {
    alert("Please enter a NUMBER over than 1!");
  } else {
    sum = 0;

    for (let i = 1; i <= n; i++) {
      sum += i;
    }
    console.log("The sum of the numbers is " + sum);
  }
}

// 2. Написать программу, которая определяет количество
// положительных, отрицательных чисел и нулей. В
// начале программы, пользователь самостоятельно
// задает какое количество чисел будет вводить, затем
// вводит сами числа.
// Пример вывода:
// «Положительных: 2 шт.
// Отрицательных: 5 шт.
// Нулей: 3 шт.»

// let n = prompt("Enter number of digits from 1 more.");

// if (n === null) {
//   alert("you cancelled!");
// } else {
//   n = Number(n);

//   if (isNaN(n) || n < 1) {
//     alert("Please enter a NUMBER over than 1!");
//   } else {
//     positiveSum = 0;
//     negativeSum = 0;
//     zeroSum = 0;

//     for (let i = 1; i <= n; i++) {
//       digit = prompt("Enter a digit...");
//       if (digit > 0) {
//         positiveSum++;
//       }
//       if (digit < 0) {
//         negativeSum++;
//       }
//       if (digit == 0) {
//         zeroSum++;
//       }
//     }

//     console.log("Quantity of positive digits is " + positiveSum);
//     console.log("Quantity of negative digits is " + negativeSum);
//     console.log("Quantity of zero digits is " + zeroSum);
//   }
// }

// 3. Написать программу, которая выводит на экран
// двузначные числа, которые делятся на 4, но не
// делятся на 6.

// for (let i = 10; i < 100; i++) {
//   if (i % 4 === 0 && i % 6 !== 0) {
//     console.log(i);
//   }
// }

// 	4. Написать программу, которая выводит среднее
// арифметическое n чисел введенных пользователем.
// Ввод чисел прекращается
// тогда, когда нажали «отмена», после чего выводится
// среднее арифметическое.

// let sum = 0;
// let quantity = 0;

// while (true) {
//   let value = +prompt(
//     "Enter the numbers whose average you would like to know",
//     ""
//   );
//   if (isNaN(value)) {
//     alert("Please enter a NUMBER!");
//   }

//   if (!value) break;
//   quantity++;
//   sum += value;
//   average = sum / quantity;
// }

// console.log("The average of the entered numbers is " + average);
