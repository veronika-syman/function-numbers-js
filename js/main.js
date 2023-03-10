"use strict"
let userInput = +prompt('Введите двузначное число');
function toDo(userInput){
    if ( isNaN( userInput ) ) alert( userInput + ' Вы ввели не число');
else if(userInput>9 && userInput<100){
 let num2 = userInput %10;
let num1 = (userInput-num2)/10;

AB(num1,num2);
} else alert (' Вы ввели не двузначное число');

}
toDo(userInput);
function AB(a,b){
alert(`summa=${a+b}`);
alert(`pr=${a*b}`);
alert(`sq=${userInput**2}`);
}
