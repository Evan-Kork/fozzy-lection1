'use strict';


//registration
function SignUp(){
	let userName = document.getElementById('UserName').value;

let emailAddres= document.getElementById('EmailAddress').value;

let userPassword = document.getElementById('Password').value;

let userAbout= document.getElementById('About').value;

let user={	
			name:userName,
			email:emailAddres,
			password: userPassword,
			about:userAbout
		};

localStorage.setItem('user',JSON.stringify(user));

if(userName==0||emailAddres==0||userPassword==0){
	alert("Error, write your param");
}


}












