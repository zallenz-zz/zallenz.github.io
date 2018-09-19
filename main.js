$(document).ready(function() {
	$("#home").fadeIn(1400);	
});
$(document).on("click", "#projecttab", function(){
	$("#home").fadeOut(600, function(){
		$("#projects").fadeIn(600);
		$("#projecttab a").addClass("active");
		$("#hometab a").removeClass("active");
	});
});
$(document).on("click", "#hometab", function(){
	$("#projects").fadeOut(600, function(){
		$("#home").fadeIn(600);
		$("#hometab a").addClass("active");
		$("#projecttab a").removeClass("active");
	});
});