
$(document).ready(function(){
    if (localStorage.length === 0)
        setTimeout("location.href = 'index.html';", 0);

    let retObj;

    let name = $('#userName')[0];
    let about = $('#aboutMe')[0];

    let arrKey = [];
    for (let i = 0; i < localStorage.length; i++) {
        arrKey.push(localStorage.key(i));
    }

    let flag = false;

    for (let i = 0; i < localStorage.length; i++) {
        let retObj2 = JSON.parse(localStorage.getItem(arrKey[i]));
        if (retObj2.active === 'true') {
            retObj = retObj2;        
            name.value = retObj.name;
            about.value = retObj.about;
            flag = true;
            break;
        }
        else
            flag = false;
    }

    if (flag === false) {
        setTimeout("location.href = 'index.html';", 0);
    }

    $(".button-result").click(function() {    
        let newname = $('#userName')[0].value;
        let newabout = $('#aboutMe')[0].value;

        retObj.name = newname;
        retObj.about = newabout;

        let sObj = JSON.stringify(retObj);
        localStorage.setItem(retObj.key, sObj);    
        setTimeout("location.href = 'index.html';", 0);
    });
});