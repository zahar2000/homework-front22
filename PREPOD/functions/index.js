
// const arr = [2, 5, -7, 92, -19, 52, -23, 61, -74, 45];
// const arr2 = [6, 3, -6, -8, 2, 3];
// const arr3 = [9, 0, -8, -4, 12, 51];
// const resultArr = [];
// const resultArr2 = [];
// const resultArr3 = [];

// for (let i = 0; i < arr.length; i++) {
//     resultArr[i] = -arr[i];
// }

// for (let i = 0; i < arr2.length; i++) {
//     resultArr2[i] = -arr2[i];
// }

// for (let i = 0; i < arr3.length; i++) {
//     resultArr3[i] = -arr3[i];
// }

// console.log(arr);
// console.log(resultArr);


// console.log;

// function getSum (num1, num2, num3) {
//     console.log(num3);
//     console.log(num1 + num2);
// }


// getSum(10);




// function getSum (num1, num2) {
//     // console.log(num1 + num2);
//     return num1 + num2;
// }

// getSum(2,6);

// const a = 100 / getSum(5, 1);
// console.log(a);

// console.log(`you are ${ getSum(2, 5) } years old`)


// prompt('enter number less than ' + getSum(5,6));

// console.log(getSum(2,6));







// const arr = [2, 5, -7, 92, -19, 52, -23, 61, -74, 45];
// const arr2 = [6, 3, -6, -8, 2, 3];
// const arr3 = [9, 0, -8, -4, 12, 51];



// function mutateOppositeArray ( numbersArray ) { // numbersArray = arr2
//     const resultArr = [];



//     for (let i = 0; i < numbersArray.length; i++) {
//         resultArr[i] = -numbersArray[i];
//     }

//     return resultArr;

// }

// const oppArr2 = createOppositeArray(arr2);

// console.log(arr2);





// function getSum (num1, num2) {
//     if (isNaN(num1) || isNaN(num2)) {
//         return;
//     }

//     const result = num1 + num2;

//     return [result, 'ok'];
// }

// 1. напишите функцию которая возвращает годовую оценку за 4 четверти (по разным предметам)
// 2. написать функцию которая принимает два числа и  возвращает массив этих чисел попорядку (длина 8)
// например: передаем 2,5 ====>>>> [2,5,2,5,2,5,2,5]
// 3. напишите функцию которая возвращает среднее арифметическое ЛЮБОМУ количеству переданных ей чисел (не должно быть массивом)



// function getAverageByQuarters (rank1, rank2, rank3, rank4) {
//     return (rank1 + rank2 + rank3 + rank4) / 4;
// }

// const mathYearRank = getAverageByQuarters(3,4,6,3);



// console.log( getAverageByQuarters(6, 4, 2,3) );


// 2. написать функцию которая принимает два числа и  возвращает массив этих чисел попорядку (длина 8)

// function generateArrayByTwoNumbers (num1, num2) {
//     const twoNumbersArray = [];

//     for (let i = 0; twoNumbersArray.length !== 8; i++) {
//         twoNumbersArray[twoNumbersArray.length] = num1;
//         twoNumbersArray[twoNumbersArray.length] = num2;
//     }

//     return twoNumbersArray;
// }

// function getOppositeArray ( numbersArray ) {
//     const resultArr = [];

//     for (let i = 0; i < numbersArray.length; i++) {
//         resultArr[i] = -numbersArray[i];
//     }

//     return resultArr;
// }

// // functional composition
// // f() g() h()  f(g(h())) Ramda Lodash

// console.log(
//     a(b(4, -1))
// );


// 3. напишите функцию которая возвращает среднее арифметическое ЛЮБОМУ количеству переданных ей чисел (не должно быть массивом)


// function getAverage (userAge, userName) {
//     let sum = 0;

//     // arguments = ['hello', false, [1,2,3]];
//     for (let i = 0; i < arguments.length; i++) {
//         sum += arguments[i];
//     }

//     return sum/arguments.length;   
// }

// console.log(getAverage('hello', false, [1,2,3]));




