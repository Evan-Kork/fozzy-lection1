const saveData = () => {
	let userValue = document.getElementById('userField').value;
	console.log(userValue);
	let aboutFieldValue = document.getElementById('aboutField').value;
	console.log(aboutFieldValue);

	localStorage.setItem('user', userValue);
	localStorage.setItem('about', aboutFieldValue);
	console.log('localStorage', localStorage);
	redirect();
}

const redirect = () =>{
	window.location.href = '../home/home.html';
}