$(document).ready(function(){
	$('#carousel').children(':eq(0)').addClass('selected');
});

setInterval(function(){
	$('.selected').toggleClass('selected');
	var numItems = $('.item').length;
	var randomItem = Math.floor((Math.random()*numItems)+1)-1;		
	$("#carousel .item:eq("+randomItem+")").toggleClass('selected');
},3000);