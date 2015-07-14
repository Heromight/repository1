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
});