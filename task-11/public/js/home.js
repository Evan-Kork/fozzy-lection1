const homeInfo = () => {
	document.getElementById('userInfo').innerHTML =
	localStorage.getItem('userName');
	document.getElementById('emailInfo').innerHTML =
	localStorage.getItem('emailName');
	document.getElementById('aboutInfo').innerHTML =
	localStorage.getItem('aboutName');
}
homeInfo();

const editUser = () => {
	window.location.href = '../task-11/edit.html'
}
const exitUser = () => {
	window.location.href = '../task-11/registration.html';
}

const deleteUser = () => {
	sessionStorage.removeItem('remember');
	sessionStorage.removeItem('email');
	sessionStorage.removeItem('password');

	localStorage.removeItem('userName');
	localStorage.removeItem('emailName');
	localStorage.removeItem('passwordName');
	localStorage.removeItem('aboutName');

	exitUser();
}