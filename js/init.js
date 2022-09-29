//Hook up the tweet display

$(document).ready(function() {
						   
	$(".countdown").countdown({
				date: "16 dec 2022 17:15:00",
				format: "on",
				date2: "17 feb 2023 17:15:00",
				format2: "on"
			},
			
			function() {
				// callback function
			});

});	
