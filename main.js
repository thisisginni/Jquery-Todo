$("ul").on("click","li",function(){
// $(this).css("color","gray");
// $(this).css("text-decoration","line-through");

//if it is black turn gray if gray turn black
// console.log($(this).css("color"));
// if($(this).css("color") === "rgb(128, 128, 128)"){
// 	console.log("gray");
// 	$(this).css("color","black");
// 	$(this).css("textDecoration","none")
// }
// else{
// $(this).css({
// 	color:"gray",
// 	textDecoration:"line-through",
// 	textTransform:"uppercase"

// });
// }
$(this).toggleClass("complete");
});

//click on x to delete li
$("ul").on("click","span",function(e){
	e.stopPropagation();
	$(this).parent().fadeOut(700,function(){
		$(this).remove();
	});	
});

$("input[type='text']").keypress(function(e){
	console.log("ket press");
	if(e.which ==13){
		console.log("Enter clicked");
		var text = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i> </span>"+ text +"</li>");

	}
})

