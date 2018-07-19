function QueryType() {
	document.getElementById("g-search").action = "https://www.google.com.ua/search";

	if (document.getElementById("r3").checked == true) {
		document.getElementById("g-search").action = "https://www.google.com.ua/maps";
	} else if (document.getElementById("r7").checked == true) {
		document.getElementById("g-search").action = "https://www.google.com.ua/flights";
		document.getElementById("query").value = "flights to " + 
			document.getElementById("query").value;
	} else if (document.getElementById("r1").checked == true) {
		document.getElementById("r1").value = '';
	}
}
