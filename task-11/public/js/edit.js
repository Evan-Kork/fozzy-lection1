const editUser = () => {
	if ((document.getElementById('email').value) != "") {
		localStorage.setItem('userName', document.getElementById('user').value);
		localStorage.setItem('emailName', document.getElementById('email').value);
		localStorage.setItem('aboutName', document.getElementById('about').value);

		window.location.href = '../task-11/home.html';
	}
}