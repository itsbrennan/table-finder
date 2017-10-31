
$(".available").on("click",function(){

    $(".popup").css("display","flex");
    $( this ).toggleClass( "reserved" );

});


$(".cancel").on("click",function(){

	$(".popup").css("display","none");
    $( this ).toggleClass( "available" );

});


let table1 = $( "table1" );


// $(table1).on("click", function(){
//     alert(table1 + " was clicked.");
// }); 


if ($(".available").on("click", function(){
	($)
	alert("yo");

}));


// let tableDetails {

// 	tableNumber:,
// 	reservationName:,
// 	phoneNumber:,
// 	groupSize:0

// }
