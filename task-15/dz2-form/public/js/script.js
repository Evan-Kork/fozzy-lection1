var input = document.getElementById('photo');
var label = input.nextElementSibling;
input.addEventListener('change', function(e) {
	var fileName = e.target.value.split('\\').pop();
	label.querySelector('span').innerHTML = fileName;
});
