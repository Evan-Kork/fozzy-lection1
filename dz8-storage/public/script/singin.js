'use strict';

function SignIn(){
 let inputEmail = document.getElementById('inputEmail').value;
 let inputPassword = document.getElementById('inputPassword').value;

 	let userEmail = JSON.parse(localStorage.getItem('user')).email;
 	let userPassword = JSON.parse(localStorage.getItem('user')).password;

 	if(inputEmail==userEmail&&inputPassword==userPassword){

 		let inputSignIn = document.getElementById('signin');
 		document.querySelector('#signin').setAttribute('href', 'index.html');
 	}
}