// ЦИКЛ: пока корабль не потоплен
// 	ПОЛУЧИТЬ координаты выстрела от пользователя
// 	СРАВНИТЬ введенные данные с диапазоном корректных значений
// 	ЕСЛИ введенные данные некорректны,
// 		ВЫВЕСТИ сообщение с предложением ввести правильное число
// 	ИНАЧЕ
// 		ПРИБАВИТЬ один к guesses
// 		ЕСЛИ выстрел попал в корабль
// 			ПРИБАВИТЬ один к количеству попаданий
// 			ЕСЛИ количество попаданий равно трем
// 				ПРИСВОИТЬ isSunk значение true
// 				ВЫВЕСТИ сообщение «Корабль потоплен!»
// 			КОНЕЦ ЕСЛИ
// 		КОНЕЦ ЕСЛИ
// 	КОНЕЦ ИНАЧЕ
// КОНЕЦ ЦИКЛА
// ВЫВЕСТИ статистику

// var location1 = 3;
// var location2 = 4;
// var location3 = 5;
// var hitloc1 = false;
// var hitloc2 = false;
// var hitloc3 = false;

// var guees;
// var hit = 0;
// var shot = 0;

// var isSunk = false; 

// while(isSunk == false){
//     guess = prompt("сделай выстрел!(выбери число от 0 до 6)");
//     if (guess < 0 || guess > 6){
//         alert ("Введи число от 0 до 6");
//     }else{
//         shot = shot + 1;
//         if(guess == location1){
//             hitloc1 = true;
//             alert("Попал!");
//             if(hitloc1 = true){
//                 window.hit = hit + 3;
//             }
//             else if(window.hit == 3){
//                 isSunk = true;
//                 alert ("ты победил в игре!");             
//             }
//         }
//         else if(guess == location2){
//             hitloc2 = true;
//             alert("Попал!");
//             if(hitloc2 = true){
//                 window.hit = window.hit + 1;
//             }
//             else if(window.hit == 3){
//                 isSunk = true;
//                 alert ("ты победил в игре!");             
//             }
//         }
//         else if(guess == location3){
//             hitloc3 = true;
//             alert("Попал!");
//             if(hitloc3 = true){
//                 window.hit = window.hit + 1;
//             }
//             else if(window.hit == 3){
//                 isSunk = true;
//                 alert ("ты победил в игре!");             
//             }
//         }else{
//             alert("МИМО!");
//         }
//         }
//     }
// var status = "Ты выстрелил " + shot + " раз для того чтобы попасть по кораблю, " +
//  "это показывает уровень твоей точности, как: " + (3/shot);
// alert(status);