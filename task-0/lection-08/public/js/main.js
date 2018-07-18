'use strict';

// Number (Infinity - нескінченність, NaN - not a number)
// String - 'string'
// Boolean - true/false
// Null - нічого, або невідомо (a=null)
// Undefined - значення не присвоєно (b=undefined)
// Object - використовується для колекції даних (o={}, array=[])

// Особливості ітераторів
// 1. Якщо хочаб один аргумент string то інший також приводиться до string
// 1 + 3 + '4' = '44'
// 1 + '3' + 4 = '134'
// '1' + 3 + 4 = '134'
// 1 + 3*4 + '1' = '131'

// 2. Зрівняння === перевіряє точну рівність, включаючи однаковий тип
// 1 == '1' - true
// 1 === '1' - false

// 3. Інші зрівняння ==, >= виконують числове приведення типу
// 4. 'a'>'A' true
// 5.
// null > 0 false
// null >= 0 true
// null == 0 false

// Цикли

// while(condition) {
	
// }
// do {} while(condition)

// for (var i = 0; i < Things.length; i++) {
// 	break;
// 	Things[i]
// }
// for (var i = Things.length - 1; i >= 0; i--) {
// 	continue;
// 	Things[i]
// }
// Iteration - continue
// Cycl - break

// Конструкція switch
// switch(a) {
// 	case true: alert('alert');
// 	case 'true': alert('alert') break;
// 	default: alert('default');
// }

// Функції
// Function declaration
// 	function start() { alert('alert')};
// Function expresion
// 	var alert = function() { alert('alert')};

// (function() { alert('alert')})();