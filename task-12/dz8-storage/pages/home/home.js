const homeStart = () => {
	document.getElementById('about').innerHTML = localStorage.getItem('about');
	document.getElementById('user').innerHTML = localStorage.getItem('user');
	document.getElementById('email').innerHTML = localStorage.getItem('email');
	console.log(localStorage.getItem('about'));
}

const deleteUser = () =>{
	sessionStorage.removeItem('about');
	sessionStorage.removeItem('user');
	sessionStorage.removeItem('email');
	localStorage.removeItem('about');
	localStorage.removeItem('user');
	localStorage.removeItem('email');
	window.location.href = '../registration/index.html';
}

const exit = () => {
	window.location.href = '../registration/index.html';
}
homeStart();

const editUser = () => {
	window.location.href = '../edit/edit.html';
}