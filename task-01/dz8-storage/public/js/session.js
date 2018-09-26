(function (){
	let i;
	let email = location.href.split("?id=")[1];
	if(localStorage.getItem(email)!=null && sessionStorage.getItem(email)!=null){
		let user = JSON.parse(localStorage.getItem(email));
		if(user.chek == true){
			return;
		}
		let session = JSON.parse(sessionStorage.getItem(email));
		if(!session){
			sessionStorage.removeItem(email);
		}
	}
	else{
		document.location.href = 'login.html';
	}
}());