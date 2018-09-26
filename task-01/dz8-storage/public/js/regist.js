$('#form-reg').submit(function(event){
	var email = $('#email-reg').val();
	if (localStorage.getItem(email) == null){
		let user = {
			'pass' : $('#password-reg').val(),
			'name' : $('#name-reg').val(),
			'birthday' : $('#birthday-reg').val(),
			'country' : $('#country-reg').val(),
			'chek' : $('#remember-reg').is(':checked'),
			'about' : $('#about-myself').val(),
			'history':[]
		}
		localStorage.setItem(email,JSON.stringify(user));
		sessionStorage.setItem(email,$('#remember-reg').is(':checked'));
		document.location.href = 'index.html?id='+email;
	}
	else{
		alert('This email is already taken');
	}
	event.preventDefault();
});
$('#log-in').click(function() {
	document.location.href = 'login.html';
});