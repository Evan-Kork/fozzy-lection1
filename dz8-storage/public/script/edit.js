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

		let inputUserName = document.getElementById('UserNameEdit');
		let inputUserAbout = document.getElementById('AboutEdit');

		inputUserName.value = userName;
		inputUserAbout.textContent = userAbout;
}


function EditSave(){
		let inputUserName = document.getElementById('UserNameEdit');
		let inputUserAbout = document.getElementById('AboutEdit');

let user={	
			name:inputUserName.value,
			email:JSON.parse(localStorage.getItem('user')).email,
			password: JSON.parse(localStorage.getItem('user')).password,
			about:inputUserAbout.value
		};


		localStorage.setItem('user',JSON.stringify(user));
}


function Delete(){
	let btnDelete = document.getElementById('deleteEdit');

	localStorage.removeItem('user');
}