// 1.Дан случайный массив чисел. С помощью метода .filter()
// отфильтруйте массив так, чтобы в новый массив вошли
// только четные двухзначные числа из исходного.

// const arrNumbers = [12, 24, 33, 43, 56, 789, 23, 97];

// const arrCountAndTwiceMumber = arrNumbers.filter(
//   (item, index, arr) => item % 2 === 0 && item < 100
// );
// console.log(arrCountAndTwiceMumber);

// 2. Дан случайный массив имен. Выяснить есть ли в этом
// массиве «Семён» с помощью метода .some().

// const persons = ["John", "Peter", "David", "Janet", "David", "Семен"];

// const isSome = persons.some((item, index, arr) => item === "Семен");

// console.log(isSome);

// 3. Дан массив случайных чисел. С помощью метода
// .reduce() просуммировать только четные числа из этого
// массива.

// const arrNumbers = [12, 24, 33, 43, 56, 789, 23, 97];
// let totalTviceNumbers = [];
// totalTviceNumbers = arrNumbers.filter((item) => item % 2 === 0);
// totalTviceNumbers = totalTviceNumbers.reduce(
//   (total, item) => (total += item),
//   0
// );
// console.log(totalTviceNumbers);

// 4. Дан массив случайных чисел, с помощью метода .reduce()
// найдите наименьший элемент этого массива
// const arrNumbers = [145, 24, 33, 43, 56, 789, 28, 97];
// let smollNumbers = arrNumbers.reduce((num, item) => {
//   if (num > item) {
//     return item;
//   } else {
//     return num;
//   }
// });
// console.log(smollNumbers);

// 5. Пользователь вводит 10 случайных значений. Каждое
// значение необходимо записать в массив. С помощью
// метода .every() проверить были ли все введенные
// пользователем данные – числами.

// const arrRandom = new Array(10).fill("Enter an array element ");
// const arrUser = arrRandom.map((item) => prompt(item));
// const check = arrUser.every((item) => {
//   return item !== null && item !== isNaN;
// });
// console.log(arrUser);
// console.log(check);

// 6. Создать массив случайных чисел, с помощью .map() вернуть массив, в котором каждое число
// массива возведено в квадрат.
// const arrNumbers = [145, 24, 33, 43, 56, 789, 28, 97];
// let arrSqure = arrNumbers.map((x) => {
//   return x * x;
// });
// console.log(arrSqure);

// 7. создать случайный двумерный массив (разной длины) из 8 элементов. Обработать массив
// reduce() и вернуть тот массив сумма элементов которого
// наибольшая.
// const arr = [
//   [1, 3, 5],
//   [6, 5],
//   [2, 7, 456, 3],
//   [4, 8, 5],
//   [1, 7, 5, 6, 2, 3],
//   [2, 8, 4],
//   [7, 3, 5],
//   [8, 3, 1, 100],
// ];

// let resultArr = arr.reduce((intermediatevalue, item) => {
//   if (
//     intermediatevalue.reduce((firstvalue, position) => firstvalue + position) >
//     item.reduce((firstvalue, position) => firstvalue + position)
//   ) {
//     return intermediatevalue;
//   } else {
//     return item;
//   }
// });
// console.log(resultArr);
// 8. Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3]. Написать функцию,
// которая вернет массив только из тех чисел, которые
// повторялись в исходном. Массив, который возвращает
// функция [1,4,6,74].

// const arr = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];
// const sameArr = arr.filter(function (item, position, array) {
//   return arr.indexOf(item) !== position;
// });
// const resultArr = sameArr.filter((item, position) => {
//   return sameArr.indexOf(item) === position;
// });
// console.log(resultArr);
