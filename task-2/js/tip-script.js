let items = document.getElementsByClassName('data');
let tip = document.getElementById('tip-container');


for (var i = 0; i < items.length; i++) {
	items[i].onmouseover = function (event) {

		let tipX = event.target.offsetLeft;
		let tipY = event.target.offsetTop-50;

		let table = document.getElementById('main-table');
		let tableWidth = table.offsetWidth;
		let tipHead = document.getElementById('tip-head');
		
		if(tipX > tableWidth/2 )
		{
			tipX = event.target.offsetLeft-250;
			tip.style.boxShadow  = '-5px 5px 0 2px rgba(1,1,1,.3)';
		}
		else {
			tipX += event.target.offsetWidth;
			tip.style.boxShadow  = '5px 5px 0 2px rgba(1,1,1,.3)';
		}

	
	

		tip.style.left = tipX+'px';
		tip.style.top = tipY+'px';
		tip.style.display = 'block';
		tipHead.innerHTML = event.target.parentElement.parentElement.querySelector('.browser>div').innerHTML + " " + event.target.innerHTML;
		
		
	}
	items[i].onmouseout = function () {
		tip.style.display = 'none';

	}
}

