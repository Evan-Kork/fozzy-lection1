function ok() {
	let arr = document.getElementById('array');
	var buf =[];
	var str ='';
	for (var i = 0; i < arr.value.length; i++) {
		if(arr.value[i]!=','){
			str+=arr.value[i];
		}
		else{
			buf.push(str);
			str = '';
		}
		if(i ==arr.value.length-1){
			buf.push(str);
		}
	}
	//console.log(buf);
	let show = document.getElementById('showLen');
	let showArray = document.getElementById('showArray');
	showArray.innerText = buf;
	show.innerText = buf.length;
};
function clean(){
	let arr = document.getElementById('array');
	arr.value = null;
	ok();
};
