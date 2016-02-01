
var time;
var i = 40;

$(document).ready(
function los() {

		time = setTimeout(function(){ 
			 i += Math.floor((Math.random()*5)+1);
			$(".progres").css("width",i+"%");

			if (i<95)
				los();
		}, 300);
});

$(window).load(function() {
	clearTimeout(time);
	$(".progres").css( "width" , "100%" );
	setTimeout(function(){ 
		$(".progres").css("height","0");
	}, 1000);

});




