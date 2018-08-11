'use strict';

// Methods

// 1.
function getLengthFunction() {
    let numbers = $('#length-array')[0].value;
    let arr = numbers.split(', ');

    let filterResult = arr.filter(function(item, i, array) {
        return (item.length  > 0);
    });

    let myResult = filterResult.length;

    let res = document.getElementsByClassName('length-result')[0];

    res.innerHTML = `<div>
        Довжина масиву: ${myResult}
        </div>`;

    return myResult;
};

// 2.
function getSliceFunction() {
    let numbers = $('#slice-array')[0].value;
    let arr = numbers.split(', ');

    let filterResult = arr.filter(function(item, i, array) {
        return (item.length  > 0);
    });

    let start = $('#slice-index1')[0].value;
    let end = $('#slice-index2')[0].value;

    let myResult = filterResult.slice(start, end);

    let res = document.getElementsByClassName('slice-result')[0];

    if (filterResult.length > 1 && start < end)
    {
        res.innerHTML = `<div>
        Новий підмасив: ${myResult}
        </div>`;
    }
    else
    {
        res.innerHTML = `<div>
        Новий підмасив: none
        </div>`;
    }
};

// 3.
function getConcatFunction() {
    let numbers1 = $('#concat-array1')[0].value;
    let arr1 = numbers1.split(', ');
    let filterResult1 = arr1.filter(function(item, i, array) {
        return (item.length  > 0);
    });

    let numbers2 = $('#concat-array2')[0].value;
    let arr2 = numbers2.split(', ');
    let filterResult2 = arr2.filter(function(item, i, array) {
        return (item.length  > 0);
    });

    let myResult = filterResult1.concat(filterResult2);
    let res = document.getElementsByClassName('concat-result')[0];

    if ((filterResult1.length > 0 && filterResult2.length > 0) || (filterResult1.length > 0 || filterResult2.length > 0))
    {
        res.innerHTML = `<div>
        Новий масив: ${myResult}
        </div>`;
    }
    else
    {
        res.innerHTML = `<div>
        Новий масив: ${"none"}
        </div>`;
    }
};

// 4.
function getIncludesFunction() {
    let numbers = $('#includes-array')[0].value;
    let arr = numbers.split(', ');

    let filterResult = arr.filter(function(item, i, array) {
        return (item.length  > 0);
    });

    let element = $('#includes-element')[0].value;

    let myResult = filterResult.includes(element)
    let res = document.getElementsByClassName('includes-result')[0];

    res.innerHTML = `<div>
        Результат: ${myResult}
        </div>`;
};

// 5.
function getJoinFunction() {
    let numbers = $('#join-array')[0].value;
    let arr = numbers.split(', ');

    let filterResult = arr.filter(function(item, i, array) {
        return (item.length  > 0);
    });

    let symbol = ($('#join-symbol')[0].value).toString();

    let myResult = filterResult.join(symbol);
    let res = document.getElementsByClassName('join-result')[0];

    if (filterResult.length > 0)
    {
        res.innerHTML = `<div>
        Результат: ${myResult}
        </div>`;
    }
    else
    {
        res.innerHTML = `<div>
        Результат: ${"none"}
        </div>`;
    }
};

// 6.
function getSplitFunction() {
    let numbers = $('#split-array')[0].value;
    let count = $('#split-count')[0].value;
    let arr;
    if (count.length > 0)
        arr = numbers.split(', ', count);
    else
        arr = numbers.split(', ');

    let res = document.getElementsByClassName('split-result')[0];
    res.innerHTML = `<div>
        Результат: ${arr} <br> Тип: ${typeof(arr)}
        </div>`;
};

// 7.
function getToStringFunction() {
    let numbers = $('#tostring-array')[0].value;
    let arr = numbers.split(', ');

    let filterResult = arr.filter(function(item, i, array) {
        return (item.length  > 0);
    });

    let myResult = filterResult.toString();
    let res = document.getElementsByClassName('tostring-result')[0];

    res.innerHTML = `<div>
        Результат: ${myResult} <br> Тип: ${typeof(myResult)}
        </div>`;
};

// 8.
function getIndexOfFunction() {
    let numbers = $('#indexof-array')[0].value;
    let arr = numbers.split(', ');

    let filterResult = arr.filter(function(item, i, array) {
        return (item.length  > 0);
    });

    let element = $('#indexof-element')[0].value;
    let index = $('#indexof-index')[0].value;

    let myResult = filterResult.indexOf(element, index);
    let res = document.getElementsByClassName('indexof-result')[0];

    res.innerHTML = `<div>
        Індекс шуканого елемента: ${myResult}
        </div>`;
};

// 8.
function getLastIndexOfFunction() {
    let numbers = $('#lastindexof-array')[0].value;
    let arr = numbers.split(', ');

    let filterResult = arr.filter(function(item, i, array) {
       return (item.length  > 0);
    });

    let element = $('#lastindexof-element')[0].value;
    let index = $('#lastindexof-index')[0].value;

    let myResult = filterResult.lastIndexOf(element, index);
    let res = document.getElementsByClassName('lastindexof-result')[0];

    res.innerHTML = `<div>
        Індекс шуканого елемента: ${myResult}
        </div>`;
};

// General

let asArray = {getLength: getLengthFunction, getSlice: getSliceFunction, getConcat: getConcatFunction, getIncludes: getIncludesFunction,
    getJoin: getJoinFunction, getSplit: getSplitFunction, getToString: getToStringFunction, getIndexOf: getIndexOfFunction,
    getLastIndexOf: getLastIndexOfFunction};

function testFunction(event)
{
    let myFunction = event.target.getAttribute('button-attribute');
    console.log(myFunction);
    asArray[myFunction]();
}

$('.button-result').on('click', testFunction);