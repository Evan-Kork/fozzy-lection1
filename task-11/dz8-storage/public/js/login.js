const login = () => {
	let email = document.getElementById('email').value;
	let password = document.getElementById('password').value;
	console.log(`email=${email}, password=${password}`);
	let emailStorage = localStorage.getItem('emailName');
	let passwordStorage = localStorage.getItem('passwordName');
	console.log(`emailStorage=${emailStorage} passwordStorage=${passwordStorage}`);
	let remember = document.getElementById("remember").checked;
	console.log('remember', remember);
	if (emailStorage == null || passwordStorage == null || email != emailStorage || password != passwordStorage) {
		document.getElementsByClassName("errorMesage")[0].style.display = "block";
	} else {
		if (remember) {
			console.log('ти сохранив')
			sessionStorage.setItem('remember', remember);
			sessionStorage.setItem('email', email);
			sessionStorage.setItem('password', password);
		} else if(remember != true && sessionStorage.getItem('email') != null) {
			console.log('ти удалив');
			sessionStorage.removeItem('remember', remember);
			sessionStorage.removeItem('email', email);
			sessionStorage.removeItem('password', password);
		}
		document.getElementsByClassName('errorMesage')[0].style.display = "none";
		goHome();
	}
};
const goToRegistration = () => {
	window.location.href = '../task-11/index.html';
}
const checkRemember = () => {
	let remember = sessionStorage.getItem('remember');
	if (remember != null) {
			document.getElementById('email').value = sessionStorage.getItem('email');
			document.getElementById('password').value = sessionStorage.getItem('password');
	};
};
checkRemember();
const goHome = () => {
	window.location.href = 'home.html';
}