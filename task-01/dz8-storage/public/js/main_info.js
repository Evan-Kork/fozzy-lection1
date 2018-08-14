var user;
var email;
$(document).ready ( function(){
	email = location.href.split("?id=")[1];
	if(localStorage.getItem(email)!=null){
		user = JSON.parse(localStorage.getItem(email));
		$('h5.user-name').text(user.name);
		$('.user-country').text(user.country);
		$('.user-birthday').text(user.birthday);
		$('.user-about-myself').text(user.about);
		for (let j = 0; j < user.history.length; j++) {
			createHistoryDiv(j);
			$('.date-history-'+j).text(user.history[j].datestory);
			$('.user-history-'+j).text(user.history[j].story);
		}
	}
	else{
		document.location.href = 'login.html';
	}
});
$('.user-send').click(function(event) {
	let strText = $('.user-textarea').val();
	if(strText=='')
	{
		alert('enter you history');
		return;
	}
	else{
		createHistoryDiv(user.history.length);
		let time = new Date();
		let strDate = time.getHours()+':'
					+ (time.getMinutes() < 10 ? '0' : '' )+ time.getMinutes()+'\n'
					+ (time.getDate() < 10 ? '0' : '' )+ time.getDate()+'.'
					+ (time.getMonth()+1 < 10 ? '0' : '' )+ (time.getMonth()+1)+'.'
					+ time.getFullYear();
		$('.date-history-'+user.history.length).text(strDate);
		$('.user-history-'+user.history.length).text(strText);
		user.history[user.history.length] = {
			datestory: strDate,
			story: strText
		};
		$('.user-textarea').val('');
		localStorage.setItem(email,JSON.stringify(user));
	}
});
function createHistoryDiv(i){
	$('.history').prepend('<div class="row py-2 mx-0 my-2 bg-dark rounded text-white">'
		+'<div class="col-2 date-history-'+i+'"></div>'
		+'<div class="col-10 user-history-'+i+'"></div></div></div>');
};
$('.editing').click(function(event) {
	sessionStorage.setItem(email,user.chek);
	document.location.href = 'editing.html?id='+email;
});
$('.home').click(function(event) {
	sessionStorage.setItem(email,user.chek);
	document.location.href = 'index.html?id='+email;
});