$(document).ready(function(){
	console.log("hello!");
});

$(document).ready(function(){
	$(".ocdbut").click(function(){
		$(this).toggleClass("black");
		$(".ocd").toggle();
	});
});

$(document).ready(function(){
	$(".mebut").mouseenter(function(){
		$(this).css("background-color","rgba(255,255,255,0.7)");
	});
	$(".mebut").mouseleave(function(){
		$(this).css("background-color","rgba(255,255,255,0.5");
	});
});

$(document).ready(function(){
	$(".mebut").click(function(){
		$(this).css("background-color","black")
		$(".me").toggle();
	});
}); 

$(document).ready(function(){
	$(".cont").mouseenter(function(){
		$(this).css("background-color","white");
		$(this).css("border","1px solid black");
		$("#cont").css("color","black");
		$("#contshadow").css("background-color","white");
		$("#contshadow").css("border", "1px solid black");
	});
	$(".cont").mouseleave(function(){
		$(this).css("background-color","black"); 
		$(this).css("border","1px solid white");
		$("#cont").css("color","white");
		$("#contshadow").css("background-color","black");
		$("#contshadow").css("border", "1px solid white");
	});
});
