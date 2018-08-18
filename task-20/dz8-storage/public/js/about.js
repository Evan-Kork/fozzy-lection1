
$(document).ready(function(){
    let retObj = JSON.parse(localStorage.getItem("object"));

    let name = $('#userName')[0];
    let about = $('#aboutMe')[0];

    name.value = retObj.name;
    about.value = retObj.about;

    retObj.about = 'As';
    about.value = retObj.about;

    $(".button-result").click(function() {

        let retObj = JSON.parse(localStorage.getItem("object"));

        let newname = $('#userName')[0].value;
        let newabout = $('#aboutMe')[0].value;

        retObj.name = newname;
        retObj.about = newabout;

        let sObj = JSON.stringify(retObj);
        localStorage.setItem("object", sObj);    
        setTimeout("location.href = 'index.html';", 0);
    });
});