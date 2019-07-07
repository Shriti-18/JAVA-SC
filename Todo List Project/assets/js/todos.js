
//Check off Specific todos by clicking
$("ul").on("click","li",function(){
	// //alert("clicked li");
	// //to turn the clicked li grey
	// //$(this).css("color","grey");
	// //to stike through
	// //$(this).css("text-decoration","line-through");
	// //if li is grey
	// console.log($(this).css("color"));
	// if($(this).css("color")==="rgb(128, 128, 128)"){
	// 	//console.log("it is grey");
	// 	$(this).css({
	// 	color:"black",
	// 	textDecoration:"none"
	// })	
	// }
	// //turn it black
	// //else
	// else{
	// $(this).css({
	// 	color:"gray",
	// 	textDecoration:"line-through"
	// })	
	// }
	// //turn it grey
	$(this).toggleClass("completed");
	
});
//click on X to delete todo

$("ul").on("click","span",function(event){
	//alert("clicked on a span");
	//$(this).parent().remove();
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

//eventListener which fires on whenever we hit enter in input text box
$("input[type='text']").keypress(function(event){
	//console.log("keypress.");
if(event.which===13){
	//console.log("you hit enter");
	//once we hit enter
	//1.extract text
	//grabbing new todo text from input
	var todoText=$(this).val();
    //create a new li and add to ul
	//2.create new todo
	$("ul").append("<li><span><i class='fa fa-trash-alt'></i></span> " + todoText + "</li>");
	//3.clear input box 
	$(this).val("");
	//4.add span
}
});

$("#plus").click(function(){
	console.log("iam clicked");
	$("input[type='text']").fadeToggle(500);
})

