const login = () => {
	console.log('Саня чемпіон');
	let emailValue = document.getElementById('emailField').value;
	let passwordValue = document.getElementById('passwordField').value;
	console.log(`email=${emailValue} password =${passwordValue}`)
	let mail = localStorage.getItem("email");
	let pass = localStorage.getItem("password");
	console.log(`LocalEmail=${mail} LocalPassword =${pass}`);
	let remember = document.getElementById("remember").checked;
	console.log("remember", remember);
	if (mail==null || pass==null || emailValue!=mail || passwordValue!=pass) {
		document.getElementsByClassName('errorMesage')[0].style.display="block";
	}else{
		if (remember) {
			sessionStorage.setItem('remember', remember);
			sessionStorage.setItem('email', mail);
			sessionStorage.setItem('password', pass);
			console.log(sessionStorage);
		} else if (remember==false && sessionStorage.getItem('email')!=null) {
			{
				sessionStorage.removeItem('remember');
				sessionStorage.removeItem('email');
				sessionStorage.removeItem('password');
			}
		}
		window.location.href = '../dz8-storage/pages/home/home.html'
		console.log('it`s OK!!!!!');
		document.getElementsByClassName('errorMesage')[0].style.display="none";
	}
}



const goToRegistration = () => {
	window.location.href = '../dz8-storage/pages/registration/index.html';
}

const checkRemember = () => {
	let email = sessionStorage.getItem('email')
	let password = sessionStorage.getItem('password')
	console.log('checkRemember', email);
	if (remember!=null) {
		document.getElementById('emailField').value = email;
		document.getElementById('passwordField').value = password;
		console.log('done');
	}
}
	checkRemember();