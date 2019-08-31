const saveData = () => {
	let userName = document.getElementById('user').value;
	let emailName = document.getElementById('email').value;
	let passwordName = document.getElementById('password').value;
	let aboutName = document.getElementById('about').value;
	console.log(`user=${userName} email=${emailName} password=${passwordName} about=${aboutName}`);
	localStorage.setItem('userName', userName);
	localStorage.setItem('emailName', emailName);
	localStorage.setItem('passwordName', passwordName);
	localStorage.setItem('aboutName', aboutName);
	console.log('localStorage', localStorage);
}
const	goHome = () => {
	window.location.href = 'login.html';
}