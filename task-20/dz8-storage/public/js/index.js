'use strict';

$(document).ready(function(){
    let userProfile = $('.user')[0];
    let retObj = JSON.parse(localStorage.getItem('object'));
    if (retObj !== null)
        userProfile.value = retObj.name;
    else
        userProfile.value = 'Anonymus';
});