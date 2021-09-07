function starts() {


    /* 1. Дан код:
    Почему код даёт именно такие результаты? */
    alert("Задание №1.")
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
    alert("Задание №3.")
    a = 5;
    b = 2;
    alert("Произведение: " + (a - b));
    a = -a
    b = -b
    alert("Если отрицательные. Их произведение: " + (a * b))
    a = -a
    alert("Если a и b разных закнов, вывести их сумму: " + (a + b))

    /*4. Присвоить переменной а значение в промежутке [0..15]. С помощью оператора switch организовать вывод чисел от a до 15.*/
    alert("Задание №4.")
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
    alert("Задание №5.")
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

    alert("Результат сложение 5 + 5 = " + adding(5, 5));
    alert("Результат вычитания 5 - 5 = " + subtraction(5, 5));
    alert("Результат деление 5 / 5 = " + devision(5, 5));
    alert("Результат умножения 5 * 5 = " + multiplication(5, 5));

    /*6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 3) и вернуть полученное значение (использовать switch). */
    alert("Задание №6.")
    function mathOperation(arg1, arg2, operation) {
        switch (operation) {
            case "сложение":
                return adding(arg1, arg2);
            case "вычитание":
                return subtraction(arg1, arg2);
            case "деление":
                return devision(arg1, arg2);
            case "умножение":
                return multiplication(arg1, arg2);
        }
    }
    var request1 = prompt("Введите первое число: ");
    var request2 = prompt("Введите второе число: ");
    var request3;
    var counter = 0;
    do {
        request3 = prompt("Выберите и введите один из вариантов математической операции (сложение, вычитание, умножение и деление). Писать в точности как указано: ");
        request3 = request3.toLowerCase()
        if (request3 == "сложение" || request3 == "вычитание" || request3 == "умножение" || request3 == "деление") {
            counter = 1;
        }

    } while (counter != 1);

    request1 = Number(request1);
    request2 = Number(request2);
    alert(mathOperation(request1, request2, request3));
    /*7. *Сравнить null и 0. Попробуйте объяснить результат. */
    alert("Ззадание №7.")
    a = null;
    b = 0;
    alert(a > b);
    alert("null > 0 = false потому что js приводит null к числу 0 и 0 не больше 0.");
    alert(a == b);
    alert("null == 0 = false потому что в js данное значение установлено по умолчанию.");
    alert(a >= b);
    alert(" null >= 0 = true потому что null не больше 0, а значит равняет. Если null не больше и не меньше 0, значит он равняет нулю. Всё логично и довольно интересно.");
}

