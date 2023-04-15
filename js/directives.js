let num =0;
for (; num < 5; num++) {
    console.log(num); // если удалось получить нужное значение, 
    //то можно прекратить работу с помощью команды break
    if (num == 2) break;
}
console.log(`Работа окончена, num = ${num}`);

let num1 = 0;
for (; num1 < 5; num1++) {
    if (num1 == 2) continue;//если num1 будет равен 2, то continue пролистнет условие 
    console.log(num1);
}

firstFor: for(let num2 = 0; num2 < 2; num2++) {
    for (let size = 0; size< 3; sizee++) {
        if (size == 2) {
            break firstFor; //метка позволяет применить break ко всему циклу.
//похожим образом работет continue. Метка должна быть присвоина выше записи.
        }
        console.log(size);
    }
}

