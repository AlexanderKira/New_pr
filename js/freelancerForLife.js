// for (let i = 0; i <= 5; i++) {
//     console.log("вывожу числа в консоль " + i);
// }

// let num = 8;
// while (num) {
//     console.log(num);
//     num--;
// } не будет равна 0

// let num = 0; 
// while(num < 3) {
//     console.log(`число: ${num}`);
//     num++;
// }

// size1: for (let num = 0; num < 2; num++) {
//         for (let size = 0; size < 3; size++){
//             console.log(size);
//             if (size == 1)
//             break size1;
//         }
//     }
        
//Функции
//пример названия функции начинается с 
//Show... обычно что-то показывают
//get... возвращают значение
//calc... вычисляют
//create... создают
//check... проверяют, возвращают логическое значение

//Рекурсия 
// function getSumm(numOne, numTwo) {
//     let numSumm = calcSumm(numOne, numTwo);//здесь типа произошло сложение с помощью другой функции

//     console.log(numSumm);
// }
// function calcSumm(numOne, numTwo) {
//     return numOne + numTwo;
// }
// getSumm(5, 5);

//или

// function calcSumm(numOne, numTwo) {
//     if (numTwo === 1) {
//         return numOne;
//     }else {
//         return numOne * calcSumm(numOne, numTwo - 1); //глубина рекурсии 10т вложеных функций
//     }
// }
// console.log(calcSumm(2, 3));

// функциональное выражение
// let showMessage= function() {
//     console.log('Hello');
// }
// showMessage();

//Стрелочная функция
// let имя переменной = (параметр, ...параметр) => выражение

// многострочная стрелочная функция 
// let getMessage = (text, name) => {
//     let message + text + ', ' + name + '!';
//     return message;
// };console.log(getMessage('Привет', 'Вася'));

// планирование 
// setTimeout(showMessage, 3000, 'привет', 'Вася'); параметр выведит сообщение из переменной через 3 секунды
// setInterval(showMessage, 500, 'привет', 'Вася'); действие с интервалом

// более точная задержка
// function showMessage(text, name) {
//     console,log(`${text}, ${name}!`);
//     setTimeout(showMessage, 500, text, name);
// }
// setTimeout(showMessage, 500, 'привет', 'Вася');

// function showMessage(num) {
//     console,log(num);
//     if (num < 5) {//дотикают до 5
//         setTimeout(showMessage, 1000, ++num);
//     }
// }
// setTimeout(showMessage, 1000, 1);

// function showNumber(num) {
//     console.log(num);
//     let timeId = setTimeout(showNumber, 1000, ++num);
//     if (num === 6) {
//         clearTimeout(timeId);
//     }
// }
// setTimeout(showNumber, 1000, 1);

// 'use strict'
// if (2 > 1){
//     showMessage = function ()  {
//         console.log('Сообщение');
//     }
// }
// showMessage(); //error

//создание обьекта 
// let userinfo = new Object(); синтаксис "конструктор обьекта"
// let userInfo = {}; синтаксис "литерал обьекта"

// тип данных Symbol

// let id = Symbol("id");
// let userinfo = {
//     name: "Вася",
//     age: 30,
//     [id]: "Некое значение"
// }
// console.log(userinfo);

//основное применение символов:
//1. "скрытые" свойства объектов
//  символьное свойство не появится в for..in
//2. Исользование системных символов 
// Symbol.iterator, Symbol.toPrimitive 

//добавление свойсва или изменение
//userinfo.age = 30;

//Удаление объекта
//delete userinfo.age;
//или delete userinfo["Like JS"]

//дублирование объектов 
// Object.assign(куда(обьект), что(свойство));
// let user = Object.assign({}, userinfo);
// Object.assign(userinfo, ['like javascript']: true, city: user1); //добавление сразу нескольких свойств

//проверка существования свойства
//console.log(userinfo?.ddress?.street);
//или
//if("name" in userinfo) {
//     console.log(userinfo.name);
// }

//цикл
//для еребора всех свойств объекта используется цикл for in
//for (let key in object) {
    //тело цикла выполняется для каждого свойства обьекта
    //console.log(key);//ключ 
    //console.log(userinfo[key]);//его значение
// }
//или
//for (let key in object.address) {
    //тело цикла выполняется для каждого свойства обьекта
    //console.log(key);//ключ 
    //console.log(userinfo.address[key]);//значение конкретного ключа
// }

// userinfo.name тоже самое, что this.name
// this.name не ревязвает к переменной, он более безопасный

// функции - конструкторы 
// пишется с большой буквы
// функция конструктор вызывается с помощью оператора new

// function UserInfo(name) {
//     this.name = name;
//     this.age = 30;
// }

// console.log(new UserInfo('Вася'));
// console.log(new UserInfo('Лена'));


//Округлить число 58.858 до числа 58

let numTwo = 58.858;
console.log(parseInt(58.858));