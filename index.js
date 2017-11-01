// reserve table

$(".circles").on("click", function reserveTable(){
		let className = $(this).attr("class");
		$(this).addClass("selected");
		let tableNum = $(this).text();
		$("#table-id").text(tableNum);
		
    	
		if (className === "circles reserved") {
			$(this).off("click");
			$(this).css("pointer-events", "none");			

	} else {
			
			$(".popup").css("display","flex").show(300);
			$(this).removeClass("available");
			$( this ).addClass( "reserved" );
	}

	});


// close or cancel

$(".cancel").on("click",function(){
	let name = $("#name").val();
	let groupSize = $("#groupSize").val();
	$(".selected").removeClass("reserved");
	$(".selected").removeClass("selected");

	
	$(".popup").hide(0);

//	Clear out input field values
	$("#name").val("");
	$("#groupSize").val("");
	$("#phoneNumber").val("");

//Prevents bubbling. Clears out reserved table data if not included.
	 return false;
    // $(".popup").css("display","none");

});


// Save

$('#save').on('click', function() {

		saveInformation();

    });


//hides cursor and shows hover details

	$(".circles").hover(function() {
		let className = $(this).attr("class");
	 	if (className === "circles reserved") {
	 		
	 		$(this).css("cursor", "not-allowed");
	 		$(".hover-details", this).show(100);
	 		}else {
	 			$(this).css("cursor", "pointer");
	 		}
	 	},
	 	function() {
	 		$(".hover-details", this).hide(100);
	 	}
	);




function saveInformation(){

		/// stores info from input fields

	   let name = $("#name").val();
	   let groupSize = $("#groupSize").val();

		//	adds details to hover box

		$(".hover-details", ".selected").append("<p>Group Size: " + groupSize + "</p>");
		$(".hover-details", ".selected").prepend("<p>Name: " + name +"</p>");

		// changes classes

		$(".selected").addClass("reserved");
		$(".selected").removeClass("available");
		$(".selected").removeClass("selected");
		$(".popup").hide(200);

		//	Clear values
		$("#name").val("");
		$("#groupSize").val("");
		$("#phoneNumber").val("");

		return false;

};

