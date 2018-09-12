'use strict';

window.onload = function(){
		let userName = JSON.parse(localStorage.getItem('user')).name;
		if(userName!=undefined){

	let btnSignIn = document.getElementById('signIn');
		let btnSignUP =document.getElementById('signUp');

		btnSignIn.style.display = 'none';
		btnSignUP.style.display = 'none';

	let userNameDiv = document.getElementById('username');
	userNameDiv.innerHTML = userName;

		}else{
			btnSignIn.style.display = 'block';
			btnSignUP.style.display = 'block';
				}

	let userAbout = JSON.parse(localStorage.getItem('user')).about;

	let textAbout = document.getElementById('About');
	textAbout.textContent = userAbout;

}


function Delete(){
	localStorage.removeItem('user');
}

