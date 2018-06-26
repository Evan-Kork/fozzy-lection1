function QueryType() {
	if (document.getElementById("r3").checked == true) {
		document.getElementById("g-search").action = "https://www.google.com.ua/maps";
	} if (document.getElementById("r7").checked == true) {
		document.getElementById("g-search").action = "https://www.google.com.ua/flights";
		document.getElementByName("query").value = "flights to " + 
			document.getElementByName("query").value;
	}
}