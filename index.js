// 6. Дана строка
// const str = ‘Мама мыла раму’;
// Написать функцию toWash(str, thing);
// Где str - это строка в которой надо поменять последнее
// слово, а thing - это, то самое слово которое надо вставить
// в конец строки.
// Функция должна возвращать строку.
// Например:
// document.write( toWash(str, ’машину’) );
// // ‘Мама мыла машину’
// document.write( toWash(str, ’рябину’) );
// // ‘Мама мыла рябину’
// document.write( toWash(str, ‘картину’) );
// // ‘Мама мыла картину’
// Вы можете использовать методы split, join, pop, push, slice и
// любые другие
// const thing = ["машину", "рябину", "картину"];
// const str = "Мама мыла раму";
// arrStr = str.split(" ");
// arrStr.pop();
// arrStr.push(thing[2]);
// console.log(arrStr);
// arrStr.splice(2, 1, thing[1]);
// console.log(arrStr);
// const carArr = thing.shift();
// const resultCar = arrStr.concat(carArr);
// resultCar.splice(2, 1);
// console.log(resultCar);

// Даны 2 массива:
// let people1 = ['Samuel', 'Jack', 'Thomas','Henry','Leo','Connor','David','Ryan'];
// let people2 = ['Connor','Stanley','Leo', 'Albert','Owen','Oliver','Ethan','Thomas'];

// 1. Пользователь вводит имя, если это имя есть в массиве people1, добавьте это имя в конец people2.
// let people1 = [
//   "Samuel",
//   "Jack",
//   "Thomas",
//   "Henry",
//   "Leo",
//   "Connor",
//   "David",
//   "Ryan",
// ];
// let people2 = [
//   "Connor",
//   "Stanley",
//   "Leo",
//   "Albert",
//   "Owen",
//   "Oliver",
//   "Ethan",
//   "Thomas",
// ];
// const userName = prompt("enter you name");
// let result = people1.includes(userName, 0);
// if (result === true) {
//   people2.push(userName);
// }
// console.log(people2);

// 2. Пользователь вводит имя, если это имя есть в массиве people2, удалите это имя из массива.
// let people1 = [
//   "Samuel",
//   "Jack",
//   "Thomas",
//   "Henry",
//   "Leo",
//   "Connor",
//   "David",
//   "Ryan",
// ];
// let people2 = [
//   "Connor",
//   "Stanley",
//   "Leo",
//   "Albert",
//   "Owen",
//   "Oliver",
//   "Ethan",
//   "Thomas",
// ];
// const userName = prompt("enter you name");
// let indexDelete = people2.indexOf(userName);
// if (indexDelete >= 0) {
//   people2.splice(indexDelete, 1);
// }
// console.log(people2);

// 3. Создайте массив только из тех имен, которые совпадают в обоих массивах.

// let people1 = [
//   "Samuel",
//   "Jack",
//   "Thomas",
//   "Henry",
//   "Leo",
//   "Connor",
//   "David",
//   "Ryan",
// ];
// let people2 = [
//   "Connor",
//   "Stanley",
//   "Leo",
//   "Albert",
//   "Owen",
//   "Oliver",
//   "Ethan",
//   "Thomas",
// ];
// let result = [];
// for (let i = 0; i < people2.length; i++) {
//   if (people1.includes(people2[i])) {
//     result.push(people2[i]);
//   }
// }
// console.log(result);
// 4. Объедините массивы people1 и people2 так, чтобы в получившемся массиве не было одинаковых имен.
// let people1 = [
//   "Samuel",
//   "Jack",
//   "Thomas",
//   "Henry",
//   "Leo",
//   "Connor",
//   "David",
//   "Ryan",
// ];
// let people2 = [
//   "Connor",
//   "Stanley",
//   "Leo",
//   "Albert",
//   "Owen",
//   "Oliver",
//   "Ethan",
//   "Thomas",
// ];
// let resultArr = [];
// for (let i = 0; i < people2.length; i++) {
//   if (!people1.includes(people2[i])) {
//     people1.push(people2[i]);
//   }
//   // 5. Отсортируйте получившийся массив по алфавиту
//   people1.sort();
// }
// console.log(people1);
