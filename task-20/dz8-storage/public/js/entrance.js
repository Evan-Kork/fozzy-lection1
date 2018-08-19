$(document).ready(function() {

    let arrKey = [];
    for (let i = 0; i < localStorage.length; i++) {
        arrKey.push(localStorage.key(i));
    }

    for (let i = 0; i < localStorage.length; i++) {
        let retObj2 = JSON.parse(localStorage.getItem(arrKey[i]));
        if (retObj2.active === 'true') {
            setTimeout("location.href = 'index.html';", 0);
        }
    }

    $(".button-enter").click(function() {
        let email = $('#emailAddress')[0].value;
        let password = $('#enterPassword')[0].value;

        let flag = false;
        for(let i = 0; i < localStorage.length; i++) {
            let retObj = JSON.parse(localStorage.getItem(arrKey[i]));
            if (email === retObj.email && password === retObj.password) {
                retObj.active = 'true';
                let number = i;
                for (let j = 0; j < localStorage.length; j++) {
                    if (j != number) {
                        let retObj2 = JSON.parse(localStorage.getItem(arrKey[j]));
                        retObj2.active = 'false';
                        let sObj2 = JSON.stringify(retObj2);
                        localStorage.setItem(retObj2.key.toString(), sObj2); 
                        flag = true;
                        break;
                    }                        
                }
                let sObj = JSON.stringify(retObj);
                localStorage.setItem(retObj.key.toString(), sObj);  
                setTimeout("location.href = 'index.html';", 0);
            }
        }
        if (flag === false)
            alert('Data is not correct! Please, try again.');
    });
});