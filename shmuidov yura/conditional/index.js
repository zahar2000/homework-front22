// 1. Создать программу в которой сравнивается возраст двух человек (Федота и Митрофана). Если возраст Федота больше чем возраст Митрофана, то должно выводится сообщение, в котором указана разница в возрасте: «Федот старше Митрофана на 3 ». Если возраст Митрофана больше, то выводится такое сообщение: «Митрофан старше Федота на 5». Если возраст обоих человек один и тот же, то выводится такое сообщение: «Федот и Митрофан одного возраста».

let growhtFedota = prompt("Enter growht Fedota");
let growhtMitrofana = prompt("Enter growht Mitrofana");
const FedotaOlder = growhtFedota - growhtMitrofana;
const MitrofanaOlder = growhtMitrofana - growhtFedota;

if (growhtFedota === null || growhtMitrofana === null) {
  alert("you cancelled!");
} else {
  growhtFedota = Number(growhtFedota);
  growhtMitrofana = Number(growhtMitrofana);
  const FedotaOlder = growhtFedota - growhtMitrofana;
  const MitrofanaOlder = growhtMitrofana - growhtFedota;

  if (isNaN(growhtFedota) || isNaN(growhtMitrofana)) {
    alert("enter numbers!");
  } else if (growhtFedota > growhtMitrofana) {
    console.log(`Федот старше митрофана на ${FedotaOlder}`);
  } else if (growhtFedota < growhtMitrofana) {
    console.log(`Миртофан старше Федота на ${MitrofanaOlder}`);
  } else {
    console.log("Федот и Митрофан одного возраста");
  }
}
// 2. Пользователь вводит ТРИ числа вывести в консоль наибольшее из них
