const registration = () => {
	let userValue = document.getElementById('userField').value;
	let emailFieldValue = document.getElementById('emailField').value;
	let passwordFieldValue = document.getElementById('passwordField').value;
	let aboutFieldValue = document.getElementById('aboutField').value;
	console.log(`userValue=${userValue} emailValue =${emailFieldValue} passwordValue=${passwordFieldValue} aboutValue=${aboutFieldValue}`);
	localStorage.setItem('user', userValue);
	localStorage.setItem('email', emailFieldValue);
	localStorage.setItem('password', passwordFieldValue);
	localStorage.setItem('about', aboutFieldValue);
	console.log('localStorage', localStorage);
}

const goHome = () => {
	window.location.href = '../../index.html';
}