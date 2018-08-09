'use strict';

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

let createElements = document.getElementsByClassName('card-body');
let buttonsResult = document.getElementsByClassName('button-result');

let createButtonResult = (i) => {
    buttonsResult[i].innerHTML = 'Результат';
    buttonsResult[i].classList.add(documentationArray[i].name + 'get-result' + i);
    return buttonsResult[i];
}

let createDivResult = (i) => {
    let divResult = document.createElement('div');
    divResult.className = 'div-result';
    divResult.setAttribute('id', documentationArray[i].name + 'is-result' + i);
    return divResult;
}

for (let i = 0; i < documentationArray.length; i++)
{
    createButtonResult(i);
    buttonsResult[i].addEventListener('click', documentationArray[i].method);
    createElements[i].append(createDivResult(i));
}

function getLength() {
    let numbers = $('#length-array')[0].value;
    let arr = numbers.split(', ');

    let filterResult = arr.filter(function(item, i, array) {
        return (item.length  > 0);
    });

    let myResult = filterResult.length;

    let res = document.getElementById(documentationArray[0].name + 'is-result' + 0);

    res.innerHTML = `<div>
        Довжина масиву: ${myResult}
        </div>`;

    return myResult;
};

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