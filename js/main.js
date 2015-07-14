jQuery(document).ready(function($) {
	$(".dropdown-container .dropdown-content").click(function(){
		$(this).siblings(".dropdown").slideToggle(200);
	});
	$(".dropdown-container .dropdown li").click(function(){
		var dropOut = $(this).parent().prev().html();
		$(this).parent().siblings(".dropdown-content").html($(this).html());
		$(this).html(dropOut);
		$(this).parent().hide();
	});
	$(".counter .plus").click(function(){
		console.log(parseInt($(this).next().text()));
		var text = $(this).next().text();
		text = parseInt(text) + 1 + " шт";
		$(this).next().text(text);
	});
	$(".counter .minus").click(function(){
		console.log(1);
		var text = $(this).prev().text();
		if (text > 0) text = parseInt(text) - 1 + " шт";
		$(this).prev().text(text);
	});
});