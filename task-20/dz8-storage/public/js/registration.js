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
                active: false.toString(),
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

    let arrKey = [];
    for (let i = 0; i < localStorage.length; i++) {
        arrKey.push(localStorage.key(i));
    }

    for (let i = 0; i < localStorage.length; i++) {
        let retObj3 = JSON.parse(localStorage.getItem(arrKey[i]));
        if (retObj3.active === 'true') {
            setTimeout("location.href = 'index.html';", 0);
        }
    }

    $(".button-result").click(function() {
        let tmp = getUserFunction();
        tmp.active = true.toString();
        let sObj = JSON.stringify(tmp);
        localStorage.setItem(tmp.key.toString(), sObj);     
        
        setFalse(arrKey);
        setTimeout("location.href = 'index.html';", 0); 
    });
});

function setFalse(arrKey) {
    for (let j = 0; j < localStorage.length - 1; j++) {
        let retObj2 = JSON.parse(localStorage.getItem(arrKey[j]));
        retObj2.active = 'false';
        let sObj2 = JSON.stringify(retObj2);
        localStorage.setItem(retObj2.key.toString(), sObj2); 
    }       
}
