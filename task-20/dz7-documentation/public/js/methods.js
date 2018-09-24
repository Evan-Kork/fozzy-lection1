'use strict';

<<<<<<< HEAD
let documentationArray = [
	{
        name: 'length',
        method: getLength
	},
	{
        name: 'slice',
        method: getSlice
	},
];

let createButtonResult = (i) => {
	let buttonResult = document.createElement('button');
	buttonResult.className = 'button-result';
	buttonResult.setAttribute('id', documentationArray[i].name + 'get-result' + i);
    buttonResult.innerHTML = `<button 
                                    type="button" 
                                    class="btn btn-info">
                                    Підрахувати                               
								</button>`;
	return buttonResult;
}

let createDivResult = (i) => {
    let divResult = document.createElement('div');
    divResult.className = 'div-result';
    divResult.setAttribute('id', documentationArray[i].name + 'is-result' + i);

    divResult.innerHTML = `<div>
                                Отримайте результат
                                </div>`;
    return divResult;
}

let createElements = document.getElementsByClassName('card-body');
let buttonіResult = document.getElementsByClassName('button-result');

for (let i = 0; i < documentationArray.length; i++)
{
    createElements[i].append(createButtonResult(i));
    createElements[i].append(createDivResult(i));
    buttonіResult[i].addEventListener('click', documentationArray[i].method);
}

function getLength() {
=======
// Methods

// 1.
function getLengthFunction() {
>>>>>>> Develop
    let numbers = $('#length-array')[0].value;
    let arr = numbers.split(', ');

    let filterResult = arr.filter(function(item, i, array) {
        return (item.length  > 0);
    });

    let myResult = filterResult.length;

<<<<<<< HEAD
    let res = document.getElementById(documentationArray[0].name + 'is-result' + 0);

    res.innerHTML = `<div>
        Довжина масиву: ${myResult}
        </div>`;   
=======
    let res = document.getElementsByClassName('length-result')[0];

    res.innerHTML = `<div>
        Довжина масиву: ${myResult}
        </div>`;
>>>>>>> Develop

    return myResult;
};

<<<<<<< HEAD
function getSlice() {
        let numbers = $('#slice-array')[0].value;
        let arr = numbers.split(', ');

        let filterResult = arr.filter(function(item, i, array) {
            return (item.length  > 0);
        });

        let start = $('#slice-index1')[0].value;
        let end = $('#slice-index2')[0].value;

        let myResult = filterResult.slice(start, end);

        let res = document.getElementById(documentationArray[1].name + 'is-result' + 1);

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

// Стара версія

$(document).ready(function(){
    $("#concat-info").click(function(){
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
        let idResult = $('#concat-result')[0];

        if ((filterResult1.length > 0 && filterResult2.length > 0) || (filterResult1.length > 0 || filterResult2.length > 0))
        {
            idResult.innerHTML = `<div>
            Новий масив: ${myResult}
            </div>`;
        }
        else
        {       
            idResult.innerHTML = `<div>
            Новий масив: ${"none"}
            </div>`;
        }
    });
});

$(document).ready(function(){
    $("#includes-info").click(function(){

        let numbers = $('#includes-array')[0].value;
        let arr = numbers.split(', ');

        let filterResult = arr.filter(function(item, i, array) {
            return (item.length  > 0);
        });

        let element = $('#includes-element')[0].value;

        let myResult = filterResult.includes(element)
        let idResult = $('#includes-result')[0];
    
        idResult.innerHTML = `<div>
            Результат: ${myResult}
            </div>`;
    });
});

$(document).ready(function(){
    $("#join-info").click(function(){

        let numbers = $('#join-array')[0].value;
        let arr = numbers.split(', ');

        let filterResult = arr.filter(function(item, i, array) {
            return (item.length  > 0);
        });

        let symbol = ($('#join-symbol')[0].value).toString();

        let myResult = filterResult.join(symbol);
        let idResult = $('#join-result')[0];
    
        if (filterResult.length > 0)
        {
            idResult.innerHTML = `<div>
            Результат: ${myResult}
            </div>`;
        }
        else
        {       
            idResult.innerHTML = `<div>
            Результат: ${"none"}
            </div>`;
        }
    });
});

$(document).ready(function(){
    $("#split-info").click(function(){

        let numbers = $('#split-array')[0].value;
        let arr = numbers.split(', ');

        let filterResult = arr.filter(function(item, i, array) {
            return (item.length  > 0);
        });

        let myResult = filterResult.toString();
        let idResult = $('#split-result')[0];
    
        idResult.innerHTML = `<div>
            Результат: ${myResult} <br> Тип: ${typeof(myResult)}
            </div>`;
    });
});

$(document).ready(function(){
    $("#tostring-info").click(function(){

        let numbers = $('#tostring-array')[0].value;
        let arr = numbers.split(', ');

        let filterResult = arr.filter(function(item, i, array) {
            return (item.length  > 0);
        });

        let myResult = filterResult.toString();
        let idResult = $('#tostring-result')[0];
    
        idResult.innerHTML = `<div>
            Результат: ${myResult} <br> Тип: ${typeof(myResult)}
            </div>`;
    });
});

$(document).ready(function(){
    $("#indexof-info").click(function(){

        let numbers = $('#indexof-array')[0].value;
        let arr = numbers.split(', ');

        let filterResult = arr.filter(function(item, i, array) {
            return (item.length  > 0);
        });

        let element = $('#indexof-element')[0].value;
        let index = $('#indexof-index')[0].value;

        let myResult = filterResult.indexOf(element, index);
        let idResult = $('#indexof-result')[0];
    
        idResult.innerHTML = `<div>
            Індекс шуканого елемента: ${myResult}
            </div>`;
    });
});

$(document).ready(function(){
    $("#lastindexof-info").click(function(){

        let numbers = $('#lastindexof-array')[0].value;
        let arr = numbers.split(', ');

        let filterResult = arr.filter(function(item, i, array) {
            return (item.length  > 0);
        });

        let element = $('#lastindexof-element')[0].value;
        let index = $('#lastindexof-index')[0].value;

        let myResult = filterResult.lastIndexOf(element, index);
        let idResult = $('#lastindexof-result')[0];
    
        idResult.innerHTML = `<div>
            Індекс шуканого елемента: ${myResult}
            </div>`;
    });
});

// такий то клас така то функція

// по атрибуту старт такої-то функції (в лістенері)

// через атрибути

// у функцію приходить івент (де елемент по якому ми клікнули)

// всім кнопкам прописати однаковий клас, по якихось параметрах, які передаємо, визначається, яку викликати функцію

// let clickButtonFunction = (id, method) =>
// {
//     document.getElementById(id).addEventListener('click', method);   
// }

// for (let i = 0; i < documentationArray.length; i++) {
//     clickButtonFunction(documentationArray[i].id, documentationArray[i].method);
// }
=======
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

function getFunctionOnClick(event)
{
    let myFunction = event.target.getAttribute('button-attribute');
    asArray[myFunction]();
}

$('.button-result').on('click', getFunctionOnClick);
>>>>>>> Develop
