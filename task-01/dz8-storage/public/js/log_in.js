$('#form-in').submit(function(event){
	let email = $('#email-in').val();
	let pass = $('#password-in').val();
	let chek = $('#remember-in').is(':checked');
	if(localStorage.getItem(email)!=null){
		let user = $.parseJSON(localStorage.getItem(email));
		if(pass == user.pass){
			user.chek = chek;
			localStorage.setItem(email,JSON.stringify(user));
			sessionStorage.setItem(email,chek);
			document.location.href = 'index.html?id='+email;
		}else{
			alert('Incorrect password');
		}
	}
	else{
		alert('Invalid email');
	}
	event.preventDefault();
});
$('.regist').click(function() {
	document.location.href = 'registration.html';
});
