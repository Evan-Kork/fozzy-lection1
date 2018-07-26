function slice_array() {
	let str = $('.slice-array').val();
	let arr = str.split(',');
	str = $('.date-on-slice').val();
	let arr_slice = str.split('-');
	$('.slice-result').val(arr.slice(arr_slice[0],arr_slice[1]));
};
function concat_array(){
	let str = $('.сoncat-array').val();
	let arr = str.split(',');
	str = $('.date-on-сoncat').val();
	let arr_slice = str.split(',');
	$('.сoncat-result').val(arr.concat(arr_slice));
};
function includes_array(){
	let str = $('.includes-array').val();
	let arr = str.split(',');
	str = $('.date-on-includes').val();
	$('.includes-result').val(arr.includes(str));
};
function join_array(){
	let str = $('.join-array').val();
	let arr = str.split(',');
	str = $('.date-on-join').val();
	$('.join-result').val(arr.join(str));
};