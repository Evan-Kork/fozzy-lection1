'use strict';
let card = document.getElementsByClassName('card');

for (var i = 0; i < card.length; i++) {
	if(i==0){
	//знаходження кнопки і заміна текста в ній
	let buttonText = card[0].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Length';

	// Заміна текста
	let lastElement = card[0].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Длина массива: число, на единицу превосходящее максимальный индекс массива';
	}

	if(i==1){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[1].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Slice';

	// Заміна текста
	let lastElement = card[1].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод slice() возвращает новый массив, содержащий копию части исходного массива.';
	}


	if(i==2){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[2].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Concat';

	// Заміна текста
	let lastElement = card[2].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод concat() возвращает новый массив, состоящий из массива, на котором он был вызван, соединённого с другими массивами и/или значениями, переданными в качестве аргументов.';
	}

		if(i==3){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[3].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Includes';

	// Заміна текста
	let lastElement = card[3].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод includes() определяет, содержит ли массив определённый элемент, возвращая в зависимости от этого true или false.';
	}

		if(i==4){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[4].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Join';

	// Заміна текста
	let lastElement = card[4].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.';
	}

		if(i==5){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[5].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Split';

	// Заміна текста
	let lastElement = card[5].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Ситуация из реальной жизни. Мы пишем сервис отсылки сообщений и посетитель вводит имена тех, кому его отправить: Маша, Петя, Марина, Василий.... Но нам-то гораздо удобнее работать с массивом имен, чем с одной строкой.';
	}

		if(i==6){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[6].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'To String';

	// Заміна текста
	let lastElement = card[6].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод toString() возвращает строку, представляющую объект.';
	}

		if(i==7){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[7].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Index Of';

	// Заміна текста
	let lastElement = card[7].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод indexOf() возвращает первый индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет.';
	}

		if(i==8){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[8].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Last Index Of';

	// Заміна текста
	let lastElement = card[8].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод lastIndexOf() возвращает последний индекс, по которому данный элемент может быть найден в массиве или -1, если такого индекса нет. Массив просматривается от конца к началу, начиная с индекса fromIndex.';
	}

		if(i==9){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[9].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Fill';

	// Заміна текста
	let lastElement = card[9].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод fill() заполняет все элементы массива от начального до конечного индексов одним значением.';
	}

		if(i==10){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[10].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Pop';

	// Заміна текста
	let lastElement = card[10].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод pop() удаляет последний элемент из массива и возвращает его значение.';
	}

		if(i==11){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[11].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Shift';

	// Заміна текста
	let lastElement = card[11].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод shift() удаляет первый элемент из массива и возвращает его значение. Этот метод изменяет длину массива.';
	}

		if(i==12){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[12].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Push';

	// Заміна текста
	let lastElement = card[12].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод push() добавляет один или более элементов в конец массива и возвращает новую длину массива.';
	}

		if(i==13){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[13].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Unshift';

	// Заміна текста
	let lastElement = card[13].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод unshift() добавляет один или более элементов в начало массива и возвращает новую длину массива.';
	}

		if(i==14){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[14].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Reverse';

	// Заміна текста
	let lastElement = card[14].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод reverse() на месте обращает порядок следования элементов массива. Первый элемент массива становится последним, а последний — первым.';
	}

		if(i==15){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[15].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Sort';

	// Заміна текста
	let lastElement = card[15].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод sort() на месте сортирует элементы массива и возвращает отсортированный массив. Сортировка не обязательно устойчива (англ.). Порядок cортировки по умолчанию соответствует порядку кодовых точек Unicode.';
	}

		if(i==16){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[16].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Splice';

	// Заміна текста
	let lastElement = card[16].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые.';
	}

		if(i==17){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[17].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Foreach';

	// Заміна текста
	let lastElement = card[17].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод forEach() выполняет указанную функцию один раз для каждого элемента в массиве.';
	}

		if(i==18){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[18].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Every';

	// Заміна текста
	let lastElement = card[18].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод every() проверяет, удовлетворяют ли все элементы массива условию, заданному в передаваемой функции.';
	}

		if(i==19){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[19].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Some';

	// Заміна текста
	let lastElement = card[19].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод some() проверяет, удовлетворяет ли хоть какой-нибудь элемент массива условию, заданному в передаваемой функции.';
	}

		if(i==20){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[20].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Filter';

	// Заміна текста
	let lastElement = card[20].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод filter() создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции.';
	}

		if(i==21){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[21].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Map';

	// Заміна текста
	let lastElement = card[21].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод map() создаёт новый массив с результатом вызова указанной функции для каждого элемента массива.';
	}

		if(i==22){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[22].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'Reduce';

	// Заміна текста
	let lastElement = card[22].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод reduce() применяет функцию к аккумулятору и каждому значению массива (слева-направо), сводя его к одному значению.';
	}

		if(i==23){
			//знаходження кнопки і заміна текста в ній
	let buttonText = card[23].getElementsByClassName('btn-link');
	let link = buttonText[0];
	link.innerText = 'ReduceRight';

	// Заміна текста
	let lastElement = card[23].lastElementChild;
	let cardBody = lastElement.getElementsByClassName('card-body');
	let text = cardBody[0];
	text.innerText = 'Метод reduceRight() применяет функцию к аккумулятору и каждому значению массива (справа-налево), сводя его к одному значению.';
	}
}

//Метод Length
		function resultLength(){
			let writeArray = document.getElementById('InputLength').value;

			let ArraySplit =writeArray.split(',');
			console.log(ArraySplit);
			let arrayLength = ArraySplit.length;

			let resultInput = document.getElementById('result');
			resultInput.value=arrayLength; 
		};




//Метод Slice
		function resultSlice(){
			let inputIndex = document.getElementById('InputIndex').value;
			let writeArray = document.getElementById('InputSlice').value;

			let ArraySplit =writeArray.split(',');
			console.log(ArraySplit);
			let arraySlice = ArraySplit.slice(inputIndex);

			let resultInput = document.getElementById('result-slice-method');
			resultInput.value=arraySlice; 
		};


//Метод Concat
		function resultConcat(){
			let writeArray1 = document.getElementById('InputArray1').value;
			let writeArray2 = document.getElementById('InputArray2').value;

			let ArraySplit1 =writeArray1.split(',');
			let ArraySplit2 =writeArray2.split(',');
		
			let arrayConcat = ArraySplit1.concat(ArraySplit2);

			let resultInput = document.getElementById('result-concat');
			resultInput.value=arrayConcat; 
		};


//Метод Includes
		function resultIncludes(){
			let inputArray = document.getElementById('InputArray').value;
			let inputElementInArray = document.getElementById('InputElementInArray').value;

			let ArraySplit =inputArray.split(',');

		
			let arrayIncludes = ArraySplit.includes(inputElementInArray);

			let resultInput = document.getElementById('result-includes');
			resultInput.value=arrayIncludes; 
		};


//Метод Join
		function resultJoin(){
			let inputArrayJoin = document.getElementById('InputArrayJoin').value;

			let ArraySplit =inputArrayJoin.split(',');

			let arrayJoin = ArraySplit.join('/');


			let resultInput = document.getElementById('resultJoin');
			resultInput.value=arrayJoin; 
		};



//Метод Split
		function resultSplit(){
			let ArraySplit = document.getElementById('InputArraySplit').value;

			let writeArraySplit= ArraySplit.split(',');


			let resultInput = document.getElementById('result-split');
			resultInput.value=writeArraySplit ; 
		};



//Метод ToString
		function resultToString(){
			let ArrayString = document.getElementById('InputArrayString').value;

			let writeArrayString = ArrayString.toString();
			console.log(writeArrayString);


			let resultInput = document.getElementById('result-string');
			resultInput.value=writeArrayString ; 
		};



//Метод IndexOF
		function resultIndexOf(){
			let arrayIndexOf = document.getElementById('InputArrayInputOf').value;
			let inputIndexInArray = document.getElementById('InputIndexInArray').value;

			let ArraySplit =arrayIndexOf.split(',');

		
			let arrayIndex = ArraySplit.indexOf(inputIndexInArray);

			let resultInput = document.getElementById('result-indexOf');
			resultInput.value=arrayIndex; 
		};



//Метод LastIndexOF
		function resultLastIndexOf(){
			let arrayIndexOf = document.getElementById('InputArrayLastIndexOf').value;
			let inputIndexInArray = document.getElementById('IndexInArray').value;

			let ArraySplit =arrayIndexOf.split(',');

		
			let arrayIndex = ArraySplit.lastIndexOf(inputIndexInArray);

			let resultInput = document.getElementById('result-LastIndexOf');
			resultInput.value=arrayIndex; 
		};



//Метод Fill
		function resultFill(){
			let arrayFill = document.getElementById('InputArrayFill').value;
			let indexArray = document.getElementById('IndexArray').value;

			let ArraySplit =arrayFill.split(',');

			let arrayIndex = ArraySplit.fill(indexArray);

			let resultInput = document.getElementById('result-fill');
			resultInput.value=arrayIndex; 
		};


//Метод Pop
		function resultPop(){
			let ArrayPop = document.getElementById('InputArrayPop').value;

			let ArraySlice = ArrayPop.split(',');

			let writeArrayPop = ArraySlice.pop();


			let resultInput = document.getElementById('result-pop');
			resultInput.value=writeArrayPop ; 
		};


//Метод Shift
		function resultShift(){
			let ArrayShift = document.getElementById('InputArrayShift').value;

			let ArraySlice = ArrayShift.split(',');

			let writeArrayShift = ArraySlice.shift();


			let resultInput = document.getElementById('result-shift');
			resultInput.value=writeArrayShift ; 
		};


//Метод Push
		function resultPush(){
			let arrayPush = document.getElementById('InputArrayPush').value;
			let addToArrayPush = document.getElementById('AddToArrayPush').value;

			let arraySlice = arrayPush.split(',');

			let writeArrayPush = arraySlice.push(addToArrayPush);

			let arrayPushLength = arraySlice.length;

			let resultNewArray = document.getElementById('result-new');
			resultNewArray.value=arraySlice ; 

			let resultNewLength = document.getElementById('result-length');
			resultNewLength.value=arrayPushLength;
		};


//Метод Unshift
		function resultUnshift(){
			let arrayUnshift = document.getElementById('InputArrayUnshift').value;
			let addToArrayUnshift = document.getElementById('AddToArrayUnshift').value;

			let arraySlice = arrayUnshift.split(',');
			let addToArraySlice = addToArrayUnshift.split(',');

			let writeArrayUnshift = arraySlice.unshift(addToArraySlice);
console.log(arraySlice);
			let arrayUnshiftLength = arraySlice.length;




			let resultNewArray = document.getElementById('result-newArray');
			resultNewArray.value=arraySlice ; 
			let resultNewLength = document.getElementById('result-newLength');
			resultNewLength.value=resultNewArray;

		};


//Метод Reverse
		function resultReverse(){
			let ArrayReverse = document.getElementById('InputArrayReverse').value;

			let ArraySlice = ArrayReverse.split(',');

			let writeArrayReverse = ArraySlice.reverse();


			let resultInput = document.getElementById('result-reverse');
			resultInput.value=writeArrayReverse ; 
		};


//Метод Sort
		function resultSort(){
			let ArraySort = document.getElementById('InputArraySort').value;

			let ArraySlice = ArraySort.split(',');

			let writeArraySort = ArraySlice.sort();


			let resultInput = document.getElementById('result-sort');
			resultInput.value=writeArraySort ; 
		};


//Метод Splice
		function resultSplice(){
			let arraySplice = document.getElementById('InputArraySplice').value;
			let indexDelete = document.getElementById('InputIndexDelete').value;
			let manyDelete = document.getElementById('InputManyDelete').value;
			let addElement = document.getElementById('InputAddElement').value;

			let ArraySlice = arraySplice.split(',');

			let writeArraySplice = ArraySlice.splice(indexDelete, manyDelete, addElement);


			let resultInput = document.getElementById('result-splice');
			resultInput.value=ArraySlice ; 
		};


//Метод Foreach
		function resultForeach(){
			let ArrayForeach = document.getElementById('InputArrayForeach').value;
			let resultInput = document.getElementById('result-foreach');

			let ArraySlice = ArrayForeach.split(',');

			let writeArrayForeach = ArraySlice.forEach(function(i){
			let a	=	resultInput.value= i ; 
			console.log(a);
			});

		};


//Метод Every
		function resultEvery(){
			let ArrayEvery = document.getElementById('InputArrayEvery').value;
			let IndexEvery = document.getElementById('IndexArrayEvery').value;

			let ArraySlice = ArrayEvery.split(',');


			function isBigEnough(i) {
				return i > IndexEvery;

			}

			let writeArrayEvery= ArraySlice.every(isBigEnough);

			let resultInput = document.getElementById('result-every');
			resultInput.value=writeArrayEvery ; 
		};


//Метод Some
		function resultSome(){
			let ArraySome = document.getElementById('InputArraySome').value;
			let IndexSome = document.getElementById('IndexArraySome').value;

			let ArraySlice = ArraySome.split(',');


			function isBigEnough(i) {
				return i > IndexSome;

			}

			let writeArraySome= ArraySlice.some(isBigEnough);

			let resultInput = document.getElementById('result-some');
			resultInput.value=writeArraySome ; 
		};


//Метод Filter
		function resultFilter(){
			let ArraySome = document.getElementById('InputArrayFilter').value;
			let IndexSome = document.getElementById('IndexArrayFilter').value;

			let ArraySlice = ArraySome.split(',');

			function isBigEnough(value) {
				return value > IndexSome;
			}

			let writeArrayFilter= ArraySlice.filter(isBigEnough);


			let resultInput = document.getElementById('result-filter');
			resultInput.value=writeArrayFilter ; 
		};


//Метод Map
		function resultMap(){
			let ArraySome = document.getElementById('InputArrayMap').value;

			let ArraySlice = ArraySome.split(',');


			let writeArrayMap= ArraySlice.map(Math.sqrt);


			let resultInput = document.getElementById('result-map');
			resultInput.value=writeArrayMap ; 
		};


//Метод Reduce
		function resultReduce(){
			let ArraySome = document.getElementById('InputArrayReduce').value;

			let ArraySlice = ArraySome.split(',');
	console.log(ArraySlice);

			let writeArrayReduce= ArraySlice.reduce(function(a, b) {

					return (Number(a) + Number(b));
			});


			let resultInput = document.getElementById('result-reduce');
			resultInput.value=writeArrayReduce ; 
		};


//Метод ReduceReight
		function resultReduceReight(){
			let ArraySome = document.getElementById('InputArrayReduceReight').value;

			let ArraySlice = ArraySome.split(',');
	console.log(ArraySlice);

			let writeArrayReduceReight= ArraySlice.reduceRight(function(a, b) {

					return (Number(a) + Number(b));
			});


			let resultInput = document.getElementById('result-reducereight');
			resultInput.value=writeArrayReduceReight ; 
		};