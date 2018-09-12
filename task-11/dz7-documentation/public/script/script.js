let checkArray = () => {
	// console.log('button Click');
	let inputValue = document.getElementById('arrayValue');
	// console.log('inputValue', inputValue);
	// console.log('inputValue', inputValue.value);
	let arrayString = inputValue.value.split(',');
	// console.log('arrayString', arrayString);
	let arrayLength = arrayString.length;
	// console.log('arrayLength', arrayLength)
	document.getElementById('mySpan').innerHTML = clearArray(arrayString);
	clearArray(arrayString);
};
let clearArray = (inputArray) => {
	console.log('inputArray', inputArray);
	let arrayResult = [];
	for (var i = 0; i < inputArray.length; i++) {
		if (inputArray[i] != "" ) {
			arrayResult.push(inputArray[i]);
		};
	};
	console.log('arrayResult', arrayResult, arrayResult.length );
	return arrayResult.length;
};