// 1. Создать функцию «переключатель» toggleMe(),
// которая при вызове чередует возвращаемые булевы
// значения (true, false).
// function toggleMe() {
//   let variable = true;
//   return function () {
//     variable = !variable;
//     return variable;
//   };
// }

// let gettoggleMe = toggleMe();
// console.log(gettoggleMe());
// console.log(gettoggleMe());
// console.log(gettoggleMe());
// console.log(gettoggleMe());

// 2. Создать функцию funcCounter(), которая способна
// считать количество своих вызовов. Если передать в эту
// функцию число меньше 10, то функция считает
// количество вызовов от этого числа до бесконечности,
// если передать число больше 10, то функция считает
// количество от этого числа до 0

// function funcCounter() {
//   let counter = 0;
//   let way = true;
//   return function (num) {
//     if (num !== undefined) {
//       counter = num;
//       way = num < 10;
//     }
//     if (way) {
//       return counter++;
//     } else {
//       if (counter === 0) {
//         return counter;
//       } else {
//         return --counter;
//       }
//     }
//   };
// }

// let countered = funcCounter();
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered(12));
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());
// console.log(countered());

// 3. Создать функцию classNameEditor(), которая
// принимает строку с названием класса и добавляет
// его в класс, если вторым параметром было
// передано true, если вторым параметром было
// передано false, то функция пытается удалить из
// класса переданное имя. Если удаление не было
// совершено, то просто вернуть строку с названием
// класса. Функция должна возвращать текущее
// название класса.

// function classNameEditor() {
//   let arrStrinClass = [];
//   return function (cls, blm) {
//     if (blm === true) {
//       arrStrinClass.unshift(cls);
//     } else {
//       arrStrinClass.splice(
//         arrStrinClass.indexOf(arrStrinClass.includes(cls)),
//         0
//       );
//     }
//     arrStrinClass.join();
//     return arrStrinClass.pop();
//   };
// }
// let classNameInclude = classNameEditor();

// console.log(classNameInclude("test", true));
// console.log(classNameInclude("brest", true));
// console.log(classNameInclude("test", true));
// console.log(classNameInclude("brest", false));
// console.log(classNameInclude("trest", true));
