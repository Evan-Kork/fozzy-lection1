'use strict';

$(document).ready(function(){
    let userProfile = $('.user')[0];
    userProfile.value = 'Anonymus';

    let arrKey = [];
    for (let i = 0; i < localStorage.length; i++) {
        arrKey.push(localStorage.key(i));
    }

    for(let i = 0; i < localStorage.length; i++) {
        let retObj = JSON.parse(localStorage.getItem(arrKey[i]));
        if (retObj !== null && retObj.active === 'true') {
            userProfile.value = retObj.name;
            break;
        }
        else {
            userProfile.value = 'Anonymus';
        }
    }

    $("#delete-user").click(function() {
        for (let i = 0; i < localStorage.length; i++) {
            let retObj = JSON.parse(localStorage.getItem(arrKey[i]));
            if (retObj.active === 'true') {
                localStorage.removeItem(arrKey[i]);
                userProfile.value = 'Anonymus';
                break;
            }
        }
    });

    $("#exit-user").click(function() {
        for (let i = 0; i < localStorage.length; i++) {
            let retObj = JSON.parse(localStorage.getItem(arrKey[i]));
            if (retObj.active === 'true') {
                retObj.active = 'false';
                let sObj = JSON.stringify(retObj);
                localStorage.setItem(retObj.key.toString(), sObj);
                userProfile.value = 'Anonymus';
                break;
            }
        }
    });
});