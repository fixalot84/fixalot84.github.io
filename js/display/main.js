$(function(){
	$('#header ul li').on('click',function(){
		$('body,html').animate({'scrollTop': $('#' + $(this).text()).position().top - 70});
	});
	/*$(document).scroll(function(e){
		
	});*/
});