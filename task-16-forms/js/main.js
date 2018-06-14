
var lang = navigator.language || navigator.userLanguage;
document.getElementById('lang').value = lang;

$.get("http://ip-api.com/json", function(response) {
    document.getElementById('country').value  = response.country;     
}, "jsonp");

$("fieldset").click( function()
    {
        $("fieldset").find("label").removeClass("fieldset-click-head");        
        $("fieldset").find("legend").removeClass("fieldset-click-head");
        $("fieldset").removeClass("fieldset-click")
        $(this).addClass("fieldset-click");
        $(this).find("legend").addClass("fieldset-click-head");
        $(this).find("label").addClass("fieldset-click-head");
});