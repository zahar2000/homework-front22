// 1. Дан объект
// const vagon = {
//   material: "wood",
//   capacity: 1000,
//   isFull: false,
//   _loaded: 0,
//   set loaded(val) {
//     if (val > 0 && val < this.capacity) {
//       return (this._loaded = val);
//     } else {
//       if (val === this.capacity) {
//         return (this.isFull = true);
//       }
//     }
//   },
// };
// Object.defineProperty(vagon, "capacity", { writable: false });
// Object.defineProperty(vagon, "isFull", { enumerable: false });
// vagon.loaded = 1000;
// console.log(vagon);
// console.log(Object.getOwnPropertyDescriptor(vagon, "isFull"));
// 1.1 Сделать capacity доступным только для чтения
// 1.2 Поле loaded может быть не больше capacity и не ниже 0
// 1.3 Если loaded === capacity то поле isFull должно быть true
// 1.4 поле isFull не должно быть доступно для записи извне
// 1.5 поле isFull должно АВТОМАТИЧЕСКИ меняться на false если loaded < capacity

// 2. Дан объект
// const kurochka = {
//   name: "Ryaba",
//   isAlive: true,
//   isZazharena: false,
//   set isZazharena(val) {
//     if (val === true) {
//       return Object.defineProperty(kurochka, "isAlive", {
//         writable: false,
//         value: false,
//         enumerable: false,
//       });
//     }
//   },
// };
// kurochka.isZazharena = true;
// kurochka.isAlive = "hhhgyfsyf";
// console.log(kurochka);
// Если поменять поле isZazharena на true, то поле isAlive должно стать false
// и больше не быть доступно для записи изменения или удаления
// ДО изменения isZazharena, поле isAlive ДОЛЖНО быть доступно для записи
// isAlive можно поменять на false ЛИШЬ ОДНАЖДЫ
