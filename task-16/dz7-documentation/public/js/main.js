/**
 * Get array function
 * @param {object} self 
 * @param {string} input 
 */
function getArray (self, input) {
  let arrayString = ($(self).closest('.form').find(`.${input}`))[0].value;
  let isComma = arrayString.match(/,/);
  let arrayWhiteSpace = arrayString.replace(/ /g, '');
  if (arrayString.length > 1 && isComma === null && arrayString !== '') {
    showAnswer(self, "Use comma as a separator!", 'red');
  } else if (arrayString.length === 0) {
    showAnswer(self, "the array is empty!", 'red');
  } else {
    let array = arrayWhiteSpace.split(',');
    return array;
  }
}
/**
 * 
 * @param {object} self 
 * @param {string} answer 
 * @param {string} answerColor 
 */
function showAnswer(self, answer, answerColor) {
  let answerDiv = $(self).closest('.form').find('.answer');
  $(answerDiv[0]).html(answer); 
  if (answerColor === 'red') {
    $(answerDiv[0]).css('color', 'red');
  } else {
    $(answerDiv[0]).css('color', 'green');
  }
};

$('.action-btn').click(function() {
  let method = $(this).closest('.collapse').attr('id');
  switch(method) {
    case 'collapseProp': getArrayLength(); break;
    case 'collapseSlice': getArraySlice(); break;
    case 'collapseConcat': getArrayConcat(); break;
    case 'collapseIncludes': checkIncludes(); break;
    case 'collapseJoin': joinArray(); break;
    case 'collapseSplit': splitArray(); break;
    case 'collapseToString': arrayToString(); break;
    case 'collapseIndexOf': getIndexOf(); break;
    case 'collapseLastIndex': getLastIndexOf();  break;   
    case 'collapseFill': fillArray(); break;
    case 'collapsePop': popElement(); break;
    case 'collapseShift': shiftElement(); break;
    case 'collapsePush': pushElement(); break;
    case 'collapseUnshift': unshiftElement(); break;
    case 'collapseReverse': reverseArray(); break;
    case 'collapseSort': sortArray(); break;
    case 'collapseSplice': spliceArray(); break;
    case 'collapseFilter': filterArray(); break;
    case 'collapseEvery': every(); break;
    case 'collapseSome': some(); break;
    case 'collapseReduce': reduce();  break;
    case 'collapseReduceRight': reduceRight(); break;
    default: console.log('Method is not found');
  }
});

function getArrayLength() {
  let self = event.target;
  let array = getArray(self, 'array-input')
  let arrayLength = array.length;
  showAnswer(self, `The length of the array is ${arrayLength}`, 'green' )
};

function getArraySlice() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let initialIndex = parseInt(($(self).closest('.form').find('.input-initial'))[0].value);
  if (initialIndex < 0 || initialIndex > array.length-1) {
    showAnswer(self, "The initial index should be more than 0 and less then the length of the array", 'red'); 
    return;       
  }
  let closingIndex = parseInt(($(self).closest('.form').find('.input-closing'))[0].value);  
  if (closingIndex > array.length-1) {
    showAnswer(self, "The closing index should be less then the length of the array", 'red' ); 
    return;   
  } 
  let arraySlice = array.slice(initialIndex, closingIndex);
  showAnswer(self, `The result is a sliced array [${arraySlice}]`, 'green');
};

function getArrayConcat() {
  let self = event.target;
  let array1 = getArray(self, 'array-input');
  let array2 = getArray(self, 'second-input');
  let arrayConcat = array1.concat(array2);
  let answer = showAnswer(self, `The result is a concat array [${arrayConcat}]`, 'green'); 
};

function checkIncludes() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let data = ($(self).closest('.form').find('.param-input'))[0].value;
  let ifIncludes = array.includes(data);
  if (ifIncludes === true) {
    showAnswer(self, `The array includes the element "${data}"`, 'green')
  } else {
    showAnswer(self, `The element "${data}" has not been found`, 'red')
  }
};

function joinArray() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let arrayString = array.join();
  showAnswer(self, `The string from your array is ${arrayString}, the type of your array now is ${typeof arrayString}`, 'green');
}

function splitArray () {
  let self = event.target;
  let array = getArray(self, 'array-input')
  showAnswer(self, `The array from you string is [${array}]`, 'green');
}

function arrayToString() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let arrayString = array.toString();
  showAnswer(self, `The string represantation of this array is ${arrayString}`, 'green');
}

function getIndexOf() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let elem = ($(self).closest('.form').find('.second-input'))[0].value;
  console.log(elem);
  let index = array.indexOf(elem);
  showAnswer(self, `The index of the element is ${index}`, 'green');
}

function getLastIndexOf() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let elem = ($(self).closest('.form').find('.second-input'))[0].value;

  let index = array.lastIndexOf(elem);
  showAnswer(self, `The last index of the element is ${index}`, 'green');
}

function fillArray() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let value = ($(self).closest('.form').find('.second-input'))[0].value;
  let initialIndex = ($(self).closest('.form').find('.input-initial'))[0].value;
  if (initialIndex < 0 || initialIndex > array.length-1) {
    showAnswer(self, "The initial index should be more than 0 and less then the length of the array", 'red'); 
    return;       
  }
  let closingIndex = parseInt(($(self).closest('.form').find('.input-closing'))[0].value);  
  if (closingIndex > array.length-1) {
    showAnswer(self, "The closing index should be less then the length of the array", 'red' ); 
    return;   
  } 
  let fillArray = array.fill(value, initialIndex, closingIndex);
  showAnswer(self, `Now your array is [${fillArray}]`, 'green');
}

function popElement() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let popElement = array.pop();
  showAnswer(self, `The removed element is ${popElement}, the array now is [${array}]`, 'green' );
}

function shiftElement() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let shiftElement = array.shift();
  showAnswer(self, `The removed element is ${shiftElement}, new length is ${array.length}`, 'green' );
}

function pushElement() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let pushElement = getArray(self, 'second-input');
  let pushedArray = pushElement.map(function(item, i, pushElement) {
    array.push(item);
  });
  showAnswer(self, `The new array is [${array}]`, 'green' );
}


function unshiftElement() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let unshiftArray = getArray(self, 'second-input');
  let newArray = unshiftArray.map(function(item, i, unshiftArray) {
    array.unshift(item);
  });
  showAnswer(self, `The new length of the array is ${array.length}, new array is [${array}]`, 'green' );
}

function reverseArray () {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let reverseArray = array.reverse();
  showAnswer(self, `The reversed array is [${reverseArray}]`, 'green');
}

function sortArray () {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let sortedArray = array.sort();
  showAnswer(self, `The sorted array is [${sortedArray}]`, 'green');
}

function spliceArray() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let index = parseInt(($(self).closest('.form').find('.second-input'))[0].value);
  if (index < 0 || index > array.length-1) {
    showAnswer(self, "The initial index should be more than 0 and less then the length of the array", 'red'); 
    return;       
  }
  let deleteCount = parseInt(($(self).closest('.form').find('.third-input'))[0].value);
  if(deleteCount > array.length - index) {
    showAnswer(self, "The amount of elements to delete should be less than those being left", 'red'); 
    return;   
  }
  let addElem = getArray(self, 'forth-input');
  let slicedArray = array.splice(index, deleteCount, ...addElem);
  showAnswer(self, `The spliced array is [${array}], the removed elements are [${slicedArray}]`, 'green');
}

function filterArray () {
  let self = event.target;
  let array = getArray(self, 'array-input');
  function isBigger(value) {
    return value > 5;
  }
  let filteredArray = array.filter(isBigger);
  showAnswer(self, `The filtered array is [${filteredArray}]`, 'green');
}

function  every() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  function isBigger(value) {
    return value > 5;
  }
  let isEvery = array.every(isBigger);
  if(isEvery === true) {
    showAnswer(self, `Every element is bigger than 5`, 'green');
  } else {
    showAnswer(self, `Not every element is bigger than 5`, 'red');
  };
}

function  some() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  function isBigger(value) {
    return value > 5;
  }
  let areSome = array.some(isBigger);
  if(areSome) {
    showAnswer(self, `Some elements are bigger than 5`, 'green');
  } else {
    showAnswer(self, `Any element is bigger than 5`, 'red');
  };
}

function reduce() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let reduceRes = array.reduce(function(prevItem, item, i, array) {
    return prevItem - item;
  });
  showAnswer(self, `The result is ${reduceRes}`, 'green');
}

function reduceRight() {
  let self = event.target;
  let array = getArray(self, 'array-input');
  let reduceRes = array.reduceRight(function(prevItem, item, i, array) {
    return prevItem - item;
  });
  showAnswer(self, `The result is ${reduceRes}`, 'green');
}

$(window).scroll(function() {
  if ( ($(this).scrollTop()) >= 10) {
      $(".scrollTop").fadeIn();
  } else {
      $(".scrollTop").fadeOut(); 
  }
});

$(".scrollTop").click(function() {
  $('html, body').animate({
      scrollTop: 0
    }, 400);
});

$('.btn.btn-link').click(function() {
  $('.card .collapse.show').not($(this).closest('.card').find('.collapse')).removeClass('show');
})





