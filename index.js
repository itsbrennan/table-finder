// reserve table

$(".available").on("click", function reserveTable(){
		let tableNum = $(this).text();
		$("#table-id").text(tableNum);
		$( this ).toggleClass( "reserved" );
    	$(".popup").css("display","flex");

		// alert("yo " + "this is " + tableNum);
	});



// close or cancel

$(".cancel").on("click",function(){

	
    $( this ).toggleClass( "available" );
    $(".popup").css("display","none");


});


// Save

$('#save').on('click', function() {
      $(".popup").css("display", "none");
    });


// let tableDetails {

// 	tableNumber:,
// 	reservationName:,
// 	phoneNumber:,
// 	groupSize:0

// }




