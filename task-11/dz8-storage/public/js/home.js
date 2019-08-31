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
	window.location.href = 'E:/repo/fozzy-lection1/task-11/dz8-storage/edit.html';
}
const exitUser = () => {
	window.location.href='E:/repo/fozzy-lection1/task-11/dz8-storage/index.html';
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