function ArrayLength() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionLengthResult = inputData.parentNode.lastChild;
	functionLengthResult.innerText = 'This array contains ' + filteredArray.length
		 + ' elements';
}
function ArraySlice() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let beginIndex = document.getElementsByClassName('methodSelect')[0].value;
	let endIndex = document.getElementsByClassName('methodSelect')[1].value;
	if (endIndex == '') {
		endIndex = undefined;
	}
	let functionSliceResult = inputData.parentNode.lastChild;
	functionSliceResult.innerText = 'Sliced elements: ['
		 + filteredArray.slice(beginIndex, endIndex) + ']';
}
function ArrayConcat() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let inputArray = inputData.value.split(',');
	let filteredArray = inputArray.filter((index) => { return index !== ''; });
	let concatData = document.getElementsByClassName('concatValues')[0];
	let concatArray = concatData.value.split(',');
	let filteredConcat = concatArray.filter((index) => { return index !== ''; });
	let functionConcatResult = inputData.parentNode.lastChild;
	functionConcatResult.innerText = 'New array: ['
		 + filteredArray.concat(filteredConcat) + ']';
}
function ArrayIncludes() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionIncludesResult = inputData.parentNode.lastChild;
	if (filteredArray.includes(document.getElementsByClassName('checkValue')[0].value)) {
		functionIncludesResult.innerText = "This array contains entered element";
	} else {
		functionIncludesResult.innerText = "This array does NOT contains entered element";
	}
}
function ArrayJoin() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionJoinResult = inputData.parentNode.lastChild;
	functionJoinResult.innerText = 'Result string: '
		 + filteredArray.join(document.getElementsByClassName('joinSeparator')[0].value);
}
function ArraySplit() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = 
		inputData.value.split(document.getElementsByClassName('splitSeparator')[0].value);
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionSplitResult = inputData.parentNode.lastChild;
	functionSplitResult.innerText = 'Result array: [' + filteredArray + ']';

}
function ArrayToString() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionToStringResult = inputData.parentNode.lastChild;
	functionToStringResult.innerText = 'Result string:' + filteredArray.toString();
}
function ArrayIndexOf() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionIndexOfResult = inputData.parentNode.lastChild;
	let arrayElement = document.getElementsByClassName('searchElement')[0].value;
	if (filteredArray.indexOf(arrayElement) !== -1) {
		functionIndexOfResult.innerText = 
			'First entrance of specified element has index '
			 + filteredArray.indexOf(arrayElement);
	} else {
		functionIndexOfResult.innerText = 'Array does not contain the specified element';
	}
}
function ArrayLastIndexOf() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionLastIndexOfResult = inputData.parentNode.lastChild;
	let arrayElement = document.getElementsByClassName('searchElementReversed')[0].value;
	if (filteredArray.lastIndexOf(arrayElement) !== -1) {
		functionLastIndexOfResult.innerText = 
			'Last entrance of specified element has index '
			 + filteredArray.lastIndexOf(arrayElement);
	} else {
		functionLastIndexOfResult.innerText = 
		'Array does not contain the specified element';
	}
}
function ArrayFill() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionFillResult = inputData.parentNode.lastChild;
	functionFillResult.innerText = 'Result array: ['
		 + filteredArray.fill(document.getElementsByClassName('fillElement')[0].value) + ']';
}
function ArrayPop() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionFillResult = inputData.parentNode.lastChild;
	let arrayPop = filteredArray.pop();
	functionFillResult.innerText = 'Last element in the array was deleted: '
		+ arrayPop;
	inputData.value = filteredArray;
}
function ArrayShift() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionFillResult = inputData.parentNode.lastChild;
	let arrayShift = filteredArray.shift();
	functionFillResult.innerText = 'Last element in the array was deleted: '
		+ arrayShift;
	inputData.value = filteredArray;
}
function ArrayPush() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let pushData = document.getElementsByClassName('pushData')[0];
	let pushArray = pushData.value.split(',');
	let filteredPush = pushArray.filter((index) => { return index !== ''; });
	for (let i = 0; i < filteredPush.length; i++) {
		filteredArray.push(filteredPush[i]);
	}
	let functionPushResult = inputData.parentNode.lastChild;
	functionPushResult.innerText = 'Array after pushing: [' + filteredArray + ']';
}
function ArrayUnshift() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let unshiftData = document.getElementsByClassName('unshiftData')[0];
	let unshiftArray = unshiftData.value.split(',');
	let filteredUnshift = unshiftArray.filter((index) => { return index !== ''; });
	for (let i = 0; i < filteredUnshift.length; i++) {
		filteredArray.unshift(filteredUnshift[i]);
	}
	let functionUnshiftResult = inputData.parentNode.lastChild;
	functionUnshiftResult.innerText = 'Array after unshifting: [' + filteredArray + ']';
}
function ArrayReverse() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionReverseResult = inputData.parentNode.lastChild;
	functionReverseResult.innerText = 'New array view: [' + filteredArray.reverse() + ']';
}
function ArraySort() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let defaultSortResult = inputData.parentNode.lastChild;
	defaultSortResult.innerText = 'Array after default sorting: [' + filteredArray.sort() + ']\n'
		+ 'Array, sorted using additional function: [' + filteredArray.sort((a, b) => { return a - b; }) + ']';
}
function ArraySplice() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let spliceBeginIndex = document.getElementsByClassName('spliceSelect')[0].value;
	let spliceDeleteCount = document.getElementsByClassName('spliceSelect')[1].value;
	let spliceData = document.getElementsByClassName('spliceData')[0];
	let spliceArray = spliceData.value.split(',');
	let filteredSpliceArray = spliceArray.filter((index) => { return index !== ''; });
	let arraySplice = filteredArray.splice(spliceBeginIndex, spliceDeleteCount, ...filteredSpliceArray);
	let functionSplitResult = inputData.parentNode.lastChild;
	functionSplitResult.innerText = 'New array view: [' + filteredArray + ']\n'
		+ 'Splitted elements: [' + arraySplice + ']';
}
function ArrayForeach() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionForeachResult = inputData.parentNode.lastChild;
	functionForeachResult.innerText = 'Foreach makes something like this:\n';
	filteredArray.forEach(function (item, i, array) {
		functionForeachResult.innerText += `Item with index ${i} has value ${item}`
		if (i + 1 < array.length) {
			functionForeachResult.innerText += ';\n';
		} else {
			functionForeachResult.innerText += '.';
		}
	});
}
function ArrayEvery() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionEveryResult = inputData.parentNode.lastChild;
	functionEveryResult.innerText = 'Statement that all elements are higher than zero is '
		 + filteredArray.every((number) => { return number > 0; });
}
function ArraySome() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionSomeResult = inputData.parentNode.lastChild;
	functionSomeResult.innerText = 'Statement that at least one element is lower than zero is '
		+ filteredArray.some((number) => { return number < 0; });
}
function ArrayFilter() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionFilterResult = inputData.parentNode.lastChild;
	functionFilterResult.innerText = 'Array with elements that can be fully divided in half: ['
		 + filteredArray.filter((index) => { return index % 2 == 0 }) + ']';
}
function ArrayMap() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionMapResult = inputData.parentNode.lastChild;
	functionMapResult.innerText = 'Array with lengths of elements: ['
		+ filteredArray.map((index) => { return index.length }) + ']';
}
function ArrayReduce() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionReduceResult = inputData.parentNode.lastChild;
	functionReduceResult.innerText = 'Reducing result (Step-by-step division of the intermediate result into each element): '
		+ filteredArray.reduce((sum, current) => { return sum / current });
}
function ArrayReduceRight() {
	let inputData = document.getElementById('dataInput_' + arguments.callee.name);
	let valueArray = inputData.value.split(',');
	let filteredArray = valueArray.filter((index) => { return index !== ''; });
	let functionReduceRightResult = inputData.parentNode.lastChild;
	functionReduceRightResult.innerText = 'Reducing result from reversed side (Step-by-step division of the intermediate result into each element): '
		+ filteredArray.reduceRight((sum, current) => { return sum / current });
}
let methodsArray = [
	{
		name : 'Length',
		text : 'размер массива',
		init : ArrayLength
	},
	{
		name: 'Slice',
		text: 'копирует от begin до end',
		init: ArraySlice
	},
	{
		name: 'Concat',
		text: 'добавляет в конец набор значений',
		init: ArrayConcat
	},
	{
		name: 'Includes',
		text: 'проверка на наличие элемента',
		init: ArrayIncludes
	},
	{
		name: 'Join',
		text: 'в строку с указанием разделителя',
		init: ArrayJoin
	},
	{
		name: 'Split',
		text: 'в массив из СТРОКИ с указанием разделителя',
		init: ArraySplit
	},
	{
		name: 'To string',
		text: 'в строку с автоматическим разделителем \',\'',
		init: ArrayToString
	},
	{
		name: 'Index of',
		text: 'индекс первого вхождения указанного элемента',
		init: ArrayIndexOf
	},
	{
		name: 'Last index of',
		text: 'индекс последнего вхождения указанного элемента',
		init: ArrayLastIndexOf
	},
	{
		name: 'Fill',
		text: 'заменяет каждый элемент указанным значением',
		init: ArrayFill
	},
	{
		name: 'Pop',
		text: 'удаляет последний элемент из массива и возвращает его',
		init: ArrayPop
	},
	{
		name: 'Shift',
		text: 'удаляет из массива первый элемент и возвращает его',
		init: ArrayShift
	},
	{
		name: 'Push',
		text: 'добавляет элемент в конец массива',
		init: ArrayPush
	},
	{
		name: 'Unshift',
		text: 'добавляет элемент в начало массива',
		init: ArrayUnshift
	},
	{
		name: 'Reverse',
		text: 'меняет порядок элементов в массиве на обратный',
		init: ArrayReverse
	},
	{
		name: 'Sort',
		text: 'сортирует массив на месте (функция)',
		init: ArraySort
	},
	{
		name: 'Splice',
		text: 'удаляет элементы с указанного index, вставляет другие элементы на их место, возвращает массив из удалённых элементов',
		init: ArraySplice
	},
	{
		name: 'Foreach',
		text: 'для перебора массива (функция)',
		init: ArrayForeach
	},
	{
		name: 'Every',
		text: 'возвращает true, если вернёт true для КАЖДОГО элемента (функция)',
		init: ArrayEvery
	},
	{
		name: 'Some',
		text: 'возвращает true, если вернёт true для КАКОГО-НИБУДЬ элемента (функция)',
		init: ArraySome
	},
	{
		name: 'Filter',
		text: 'фильтрация массива через функцию (функция)',
		init: ArrayFilter
	},
	{
		name: 'Map',
		text: 'трансформация массива (функция)',
		init: ArrayMap
	},
	{
		name: 'Reduce',
		text: 'для \'свёртки\' массива',
		init: ArrayReduce
	},
	{
		name: 'Reduce right',
		text: 'Reduce справа налево',
		init: ArrayReduceRight
	}
];
let documentationBlock = document.getElementById('documentation');
let createCardHeader = (i) => {
	let cardHeaderBlock = document.createElement('div');
	cardHeaderBlock.className = 'card-header';
	cardHeaderBlock.id = 'heading' + i;
	let cardHeaderButton = document.createElement('button');
	cardHeaderButton.classList.add('btn');
	cardHeaderButton.classList.add('btn-link');
	cardHeaderButton.type = 'button';
	cardHeaderButton.setAttribute('data-toggle', 'collapse');
	cardHeaderButton.setAttribute('data-target', `#collapse${i}`);
	cardHeaderButton.setAttribute('aria-expanded', `${i === 0 ? 'true' : 'false'}`);
	cardHeaderButton.setAttribute('aria-controls', `collapse${i}`);
	cardHeaderButton.innerText = `${i + 1}. ${ methodsArray[i].name }`;
	cardHeaderBlock.append(cardHeaderButton);
	return cardHeaderBlock;
}
let createCardContent = (i) => {
	let defaultBlock = document.createElement('div');
	defaultBlock.className = 'cardForm';
	let defaultField = document.createElement('input');
	defaultField.id = 'dataInput_' + methodsArray[i].init.name;
	defaultField.type = 'text';
	defaultField.value = '1,2,3,4,5';
	let methodButton = document.createElement('button');
	methodButton.id = 'dataButton' + i;
	methodButton.innerText = 'Result';
	let methodResult = document.createElement('div');
	methodResult.className = 'methodResult';
	defaultBlock.append(defaultField);
	switch (methodsArray[i].name) {
		case 'Slice':
			let beginIndex = document.createElement('select');
			beginIndex.className = 'methodSelect';
			let endIndex = document.createElement('select');
			endIndex.className = 'methodSelect';
			endIndex.append(document.createElement('option'));
			let valueArray = defaultField.value.split(',');
			let filteredArray = valueArray.filter((index) => { return index !== ''; });
			let selectInput = [beginIndex, endIndex];
			selectInput.forEach(input => {
				for (let elem = 0; elem < filteredArray.length; elem++) {
					let selectOption = document.createElement('option');
					selectOption.value = elem;
					selectOption.innerText = elem;
					input.append(selectOption);
				}
			});
			defaultBlock.append(beginIndex);
			defaultBlock.append(endIndex);
			break;
		case 'Concat':
			let concatValues = document.createElement('input');
			concatValues.className = 'concatValues';
			concatValues.type = 'text';
			concatValues.value = '10,100';
			defaultBlock.append(concatValues);
			break;
		case 'Includes':
			let checkValue = document.createElement('input');
			checkValue.className = 'checkValue';
			checkValue.type = 'text';
			checkValue.value = '3';
			defaultBlock.append(checkValue);
			break;
		case 'Join':
			let joinSeparator = document.createElement('input');
			joinSeparator.className = 'joinSeparator';
			joinSeparator.type = 'text';
			joinSeparator.value = ' - ';
			defaultBlock.append(joinSeparator);
			break;
		case 'Split':
			let splitSeparator = document.createElement('input');
			splitSeparator.className = 'splitSeparator';
			splitSeparator.type = 'text';
			splitSeparator.value = ',';
			defaultBlock.append(splitSeparator);
			break;
		case 'Index of':
			let searchElement = document.createElement('input');
			searchElement.className = 'searchElement';
			searchElement.type = 'text';
			searchElement.value = '5';
			defaultBlock.append(searchElement);
			break;
		case 'Last index of':
			let searchElementReversed = document.createElement('input');
			searchElementReversed.className = 'searchElementReversed';
			searchElementReversed.type = 'text';
			searchElementReversed.value = '5';
			defaultBlock.append(searchElementReversed);
			break;
		case 'Fill':
			let fillElement = document.createElement('input');
			fillElement.className = 'fillElement';
			fillElement.type = 'text';
			fillElement.value = '5';
			defaultBlock.append(fillElement);
			break;
		case 'Push':
			let pushData = document.createElement('input');
			pushData.className = 'pushData';
			pushData.type = 'text';
			pushData.value = '6,7,8';
			defaultBlock.append(pushData);
			break;
		case 'Unshift':
			let unshiftData = document.createElement('input');
			unshiftData.className = 'unshiftData';
			unshiftData.type = 'text';
			unshiftData.value = '0,-1,-2';
			defaultBlock.append(unshiftData);
			break;
		case 'Sort':
			defaultField.value = '1,2,15,3,27';
			break;
		case 'Splice':
			let beginSpliceIndex = document.createElement('select');
			beginSpliceIndex.className = 'spliceSelect';
			let deleteCount = document.createElement('select');
			deleteCount.className = 'spliceSelect';
			let valueSpliceArray = defaultField.value.split(',');
			let filteredSpliceArray = valueSpliceArray.filter((index) => { return index !== ''; });
			let spliceData = document.createElement('input');
			spliceData.className = 'spliceData';
			spliceData.type = 'text';
			spliceData.value = 'a,b,c';
			for (let reverseElem = filteredSpliceArray.length * -1; reverseElem < 0; reverseElem++) {
				let spliceStartReverse = document.createElement('option');
				spliceStartReverse.value = reverseElem;
				spliceStartReverse.innerText = reverseElem;
				beginSpliceIndex.append(spliceStartReverse);
			}
			for (let elem = 0; elem < filteredSpliceArray.length; elem++) {
				let selectSpliceStart = document.createElement('option');
				selectSpliceStart.value = elem;
				selectSpliceStart.innerText = elem;
				beginSpliceIndex.append(selectSpliceStart);
			}
			for (let countElem = 0; countElem <= filteredSpliceArray.length; countElem++) {
				let selectSpliceCount = document.createElement('option');
				selectSpliceCount.value = countElem;
				selectSpliceCount.innerText = countElem;
				deleteCount.append(selectSpliceCount);
			}
			defaultBlock.append(beginSpliceIndex);
			defaultBlock.append(deleteCount);
			defaultBlock.append(spliceData);
			break;
		case 'Foreach':
			defaultField.value = 'a,b,c,d,e';
			break;
		case 'Map':
			defaultField.value = 'One,Two,Three,Four,Five';
			break;
		default:
			break;
	}
	defaultBlock.append(methodButton);
	defaultBlock.append(methodResult);
	return defaultBlock;
}
let createCardBody = (i) => {
	let cardBodyBlock = document.createElement('div');
	cardBodyBlock.id = 'collapse' + i;
	cardBodyBlock.className = `collapse ${i === 0 ? 'show' : ''}`;
	cardBodyBlock.setAttribute('aria-labelledby', `heading${i}`);
	cardBodyBlock.setAttribute('data-parent', '#documentation');
	let cardBodyContext = document.createElement('div');
	cardBodyContext.classList.add('card-body');
	cardBodyContext.append(createCardContent(i));
	cardBodyBlock.append(cardBodyContext);

	return cardBodyBlock;
}
let clickButtonFunction = (i) => {
	document.getElementById('dataButton' + i).addEventListener('click', methodsArray[i].init);
}
let createCard = (i) => {
	let cardBlock = document.createElement('div');
	cardBlock.className = 'card';
	cardBlock.append(createCardHeader(i));
	cardBlock.append(createCardBody(i));
	documentationBlock.append(cardBlock);
	clickButtonFunction(i);
}
for (let i = 0; i < methodsArray.length; i++) {
	createCard(i);
}
