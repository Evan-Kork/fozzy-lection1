$(".browser-info").click(function() {
    $('.star-info').removeClass("show");
    $(this).siblings().addClass("show");
    $(".close-info").addClass("show");
});

$(".close-info").click(function() {
    $('.star-info.show').removeClass("show");
});

$("td.available").click (function() {
	$("td").removeClass("click-cell");
	$(this).addClass("click-cell");
});

$("td.future-versions").click (function() {
	$("td").removeClass("click-cell");
	$(this).addClass("click-cell");
});


$(document).mouseup(function (e) {
	var cell = $("td.available");
	var brownCell = ("tr.brown-row td");
	var oldCell = $("td.future-versions");
	if (cell.has(e.target).length === 0 || oldCell.has(e.target).length === 0) {
		cell.removeClass("click-cell");
		oldCell.removeClass("click-cell");
	}
});




