var height_result_div = 40;//высотв дива с результатом.
var animation_time_div_result = 200;//скорость анимации создания нового дива.
var method = [];//Массив в котором сохранины название методов и их начальные данные.

//Функция которая при загрузке страницы запоминает
//входные данные каждого метода и сохраняет их в массив.
$(document).ready ( function(){
	let buf;
	for (var i = 0; i < $('.rem-div').length; i++) {
		buf = $('.rem-div:eq('+i+')').attr('class').split('-')[0];
		method[buf] = {
			'arr': $('.'+buf+'-array').val(),
			'dat': $('.data-on-'+buf).val()
		};
	}
});

//Функция которая при каждом закрытии элемента акардиона удаляет
//ненужные теги и заполняет поля значениями по умолчанию, так же вызывает
//функцию отвечающую за скрол до элемента который открыли.
$('.rem-div').click(function() {
	let str = $(this).attr('class').split('-')[0];
	if($(this).attr('aria-expanded')=='true'){
		$('.'+str+'-array').val(method[str].arr);
		$('.data-on-'+str).val(method[str].dat);
		if($('.'+str+'-result').length != 0){
			$('.'+str+'-result').remove();
		}
	}else{
		scrollDiv(str);
	}
});
//Событие которое отвечает за вывод результата при нажатии кнопки "ОК" на любом методе.
$('.button').click(function() {
	let str = $(this).attr('class').split(' ')[0];
	appendDiv(str);
	let strData = $('.'+str+'-array').val();
	let arr = strData.split(',');
	strData = $('.data-on-'+str).val();
	window[str+'Array'](arr,strData);
});
//Функция которая создает поле с результатом и выводит его.
function appendDiv(str){
	if($('.'+str+'-result').length == 0){
		$('.'+str+'-div').append('<div class="col bg-white text-dark rounded mx-3 p-2 '+str+'-result"/>');
		$('.'+str+'-result').animate({height: height_result_div},animation_time_div_result);
	}
};
//Функция которая скролит до только что открытого элемента.
function scrollDiv(str){
	var destination = $('.'+str+'-open-close').offset().top;
	destination-=100;
	$('html, body').animate({ scrollTop: destination },1000);
};
//Функции которые вписывают результат в нужное поле, выполнив перед этим нужным метод.
function sliceArray(arr,strData) {
	let dataSlice = strData.split('-');
	$('.slice-result').text(arr.slice(dataSlice[0],dataSlice[1]));
};
function сoncatArray(arr,strData) {
	let dataConcat = strData.split(',');
	$('.сoncat-result').text(arr.concat(dataConcat));
};
function includesArray(arr,strData) {
	$('.includes-result').text(arr.includes(strData));
};
function joinArray(arr,strData) {
	$('.join-result').text(arr.join(strData));
};
function toStringArray(arr,strData) {
	$('.toString-result').text(arr.toString()+' - '+typeof(arr.toString()));
};
function indexOfArray(arr,strData) {
	$('.indexOf-result').text(arr.indexOf(strData));
};
function lastIndexOfArray(arr,strData) {
	$('.lastIndexOf-result').text(arr.lastIndexOf(strData));
};
function fillArray(arr,strData) {
	$('.fill-result').text(arr.fill(strData));
};
function popArray(arr,strData) {
	$('.pop-result').text('delete element - '+arr.pop()+' || '+arr);
};
function shiftArray(arr,strData) {
	$('.shift-result').text('delete element - '+arr.shift()+' || '+arr);
};
function pushArray(arr,strData) {
	arr.push(strData);
	$('.push-result').text(arr);
};
function unshiftArray(arr,strData) {
	arr.unshift(strData);
	$('.unshift-result').text(arr);
};
function reverseArray(arr,strData) {
	$('.reverse-result').text(arr.reverse());
};
function sortArray(arr,strData) {
	$('.sort-result').text(arr.sort());
};
function filterArray(arr,strData) {
	$('.filter-result').text(arr.filter(function(item){
		return eval(strData);
	}));
};
function mapArray(arr,strData) {
	$('.map-result').text(arr.map(function(item){
		return eval(strData);
	}));
};
function splitArray(arr,strData) {
	let str = $('.split-array').val();
	$('.split-result').text(str.split(strData));
};