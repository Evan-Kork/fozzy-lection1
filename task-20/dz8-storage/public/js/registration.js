'use strict';

let tmpkey, tmpname, tmpemail, tmpabout, tmppassword;

let getUserFunction = () => {
    tmpkey = Date.now().toString();
    tmpname = $('#userName')[0].value;
    tmpemail = $('#emailAddress')[0].value;
    tmpabout = $('#aboutMe')[0].value;
    tmppassword = $('#enterPassword')[0].value;
        if (tmpkey.length > 0 && tmpname.length > 0 && tmpemail.length > 0 && tmpabout.length > 0 
            && tmppassword.length > 0)
        {
            let user = {
                key: tmpkey,
                name:tmpname,
                email: tmpemail,
                about: tmpabout,
                password: tmppassword,
            };
            return user;
        }
    return null;
}

$(document).ready(function() {
    $(".button-result").click(function() {
        let tmp = getUserFunction();
        
        let sObj = JSON.stringify(tmp);
        localStorage.setItem("object", sObj);     
        setTimeout("location.href = 'index.html';", 0); 
    });
});