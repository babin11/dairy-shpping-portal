//console.log("Its Working");
$(document).ready(function() {
	//Loads initial index.html
	$("#content").load("../src/main.html");

	//handle menu click
	$(".nav__links").click(function() {
		var page = $(this).attr("href");
		$("#content").load("../src/" + page + ".html");
		//prevent default href action in links
		return false;
		//alert(page);
	});
});
