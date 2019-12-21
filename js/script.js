//console.log("Its Working");
$(document).ready(function() {
	//Loads initial index.html
	$("#content").load("../src/main.html");

	//handle menu click
	$(".nav__links").click(function() {
		//load content without refreshing
		var page = $(this).attr("href");
		$("#content").load("../src/" + page + ".html");

		//to remove the background color in index.html
		if (page != "main") {
			$("#header-background").removeClass("header-background");
		} else {
			$("#header-background").addClass("header-background");
		}
		//prevent default href action in links
		return false;
	});
});
