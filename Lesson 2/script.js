/* 1. Дан код:
Почему код даёт именно такие результаты? */
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2
alert("Почему код даёт именно такие результаты? c = ++a; alert(c);           // 2");
alert("Потому что сначала происходит инкрементирование, а потом возврат значения.");
d = b++; alert(d);           // 1
alert("Почему код даёт именно такие результаты? d = b++; alert(d);           // 1");
alert("Потому что сначала происходит возврат значения, а потом инкрементирование.");
c = (2 + ++a); alert(c);      // 5
alert("Почему код даёт именно такие результаты? c = (2 + ++a); alert(c);      // 5");
alert("Потому что сначала происходит инкрементирование, потом происходит сложение, а потом возврат числа.");
d = (2 + b++); alert(d);      // 4
alert("Почему код даёт именно такие результаты? d = (2 + b++); alert(d);      // 4");
alert("Потому что сначала происходит сложение, потом возврат числа, а после инкрементирование.");
alert("a = " + a + ". Все логично. Имели значение 1. Два раза использовали оператор инкрементирования и получили значение 3 ");                    // 3
alert("b =" + b + ". Тут аналогично, что и с \"a\" ");                    // 3

a = 2;
var x = 1 + (a *= 2);

alert("Задание №2")
alert("x = " + x + ". Даже не знаю что тут написать. Магия. Если серьезно. Умножение а на 2, после прибавляем 1 и получаем 5.");

/*3. Объявить две целочисленные переменные a и b и задать им произвольные начальные значения. Затем написать скрипт, который работает по следующему принципу:

    если a и b положительные, вывести их разность;
    если а и b отрицательные, вывести их произведение;
    если а и b разных знаков, вывести их сумму; ноль можно считать положительным числом.*/

a = 5;
b = 2;
alert("Произведение: " + (a - b));
a = -a
b = -b
alert("Если отрицательные. Их произведение: " + (a * b))
a = -a
alert("Если a и b разных закнов, вывести их сумму: " + (a + b))

/*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/

var a = prompt("Введите число от 0 до 15: ");
var count = 0;
a = Number(a);
switch (count) {
    case 0:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 1:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 2:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 3:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 4:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 5:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 6:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 7:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 8:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 9:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 10:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 11:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 12:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 13:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 14:
        alert(count);
        if (count === a) {
            alert("Всё");
            break;
        }
        count++;
    case 15:
        alert(count);
        alert("Всё. Где цикл. Зачем столько кода...")
        if (count === a) {
            break;
        }


}

/*5. Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. Обязательно использовать оператор return. */

function adding(x, y) {
    result = x + y;
    return result;
}

function subtraction(x, y) {
    result = x - y;
    return result;
}

function devision(x, y) {
    result = x / y;
    return result;
}

function multiplication(x, y) {
    result = x * y;
    return result;
}

alert("Результат сложение 5 + 5 = " + adding(5, 5))
alert("Результат вычитания 5 - 5 = " + subtraction(5, 5))
alert("Результат деление 5 / 5 = " + devision(5, 5))
alert("Результат умножения 5 * 5 = " + multiplication(5, 5))