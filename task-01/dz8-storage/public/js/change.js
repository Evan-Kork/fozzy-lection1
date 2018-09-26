var user;
var email;
var i;
$(document).ready ( function(){
	email = location.href.split("?id=")[1];
	if(localStorage.getItem(email)!=null){
		user = JSON.parse(localStorage.getItem(email));
		$('#name-change').val(user.name);
		$('#country-change').val(user.country);
		$('#birthday-change').val(user.birthday);
		$('#about-myself-change').val(user.about);
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
$('.save-change').click(function(event) {
	user.name = $('#name-change').val();
	user.country = $('#country-change').val();
	user.birthday = $('#birthday-change').val();
	user.about = $('#about-myself-change').val();
	localStorage.setItem(email,JSON.stringify(user));
	document.location.href = 'index.html?id='+email;
});
$('.home').click(function(event) {
	sessionStorage.setItem(email,user.chek);
	document.location.href = 'index.html?id='+email;
});
$('.editing').click(function(event) {
	sessionStorage.setItem(email,user.chek);
	document.location.href = 'editing.html?id='+email;
});
function createHistoryDiv(i){
	$('.history').prepend('<div class="history-'+i+' row py-2 mx-0 my-2 bg-dark rounded text-white">'
		+'<div class="col-2 date-history-'+i+'"></div>'
		+'<div class="col-8 user-history-'+i+'"></div>'
		+'<div class="col-2 text-right pr-2 pl-1">'
		+'<img class="c-'+i+' close close-icon" src="public/img/close.svg" style="width: 20px;"></div></div>');
};
$('.history').on("click",'.close-icon', function(){
	var a = $(this).attr('class').split(' ')[0].split('-')[1];
	console.log('a = ',a);
	$('.history-'+a).remove();
	user.history.splice(a,1);
	localStorage.setItem(email,JSON.stringify(user));
});