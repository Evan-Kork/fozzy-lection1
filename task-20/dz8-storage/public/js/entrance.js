$(document).ready(function() {
    $(".button-enter").click(function() {
        let email = $('#emailAddress')[0].value;
        let password = $('#enterPassword')[0].value;
        let retObj = JSON.parse(localStorage.getItem("object"));
        if (email === retObj.email && password === retObj.password)
            setTimeout("location.href = 'index.html';", 0);
        else
            alert('Data is no correct. Please try again!');
    });
});