$(document).ready(function(){
	
	$(window).scroll(function() {
	    parallax();
	    appear();
	    books();
	});


	function parallax() {
	    var scrolled = 
	        $(window).scrollTop();
	    $('#backg').css('top', -(scrolled * 0.6) + 'px');
	};

	function appear() {
		var scrolled = 
	        $(window).scrollTop();
	    if (scrolled == 0) {
	    	$('#content-wrapper').addClass('.pop');	
	    } else if (scrolled < 150) {
	    	$('#content-wrapper').hide(1000);
	    	$('#arrow').show(1000);
	    } else if (scrolled > 150) {
	    	$('#content-wrapper').show(1000);
	    	$('#arrow').hide(1000);
		}
	};



		var faded =false;
		var num = 0;
		window.setInterval(function() {
			if (faded == false) {
				$(".quote-container").fadeOut(1000);
				faded = true;
			} else if (faded == true) {
				num = Math.floor((Math.random() * 4) + 1);
				if (num == 1) {
					document.getElementById("quote-item").innerHTML = "'You can't get a cup of tea big enough or a book long enough to suit me.'";
					document.getElementById("author").innerHTML = "C.S. Lewis"
				} else if (num == 2) {
					document.getElementById("quote-item").innerHTML  = "'A book should serve as the ax for the frozen sea within us.'";
					document.getElementById("author").innerHTML  = "Franz Kafka"
				} else if (num == 3) {
					document.getElementById("quote-item").innerHTML  = "'Finishing a good book is like leaving a good friend.'";
					document.getElementById("author").innerHTML  = "William Feather"
				} else if (num == 4) {
					document.getElementById("quote-item").innerHTML  = "'You cannot open a book without learning something.'";
					document.getElementById("author").innerHTML  = "Confucius"
				}
				$(".quote-container").fadeIn(1000);
				faded = false;
			}
		}, 2000);

	$("#quiz").hover(function(){
		$("#quiz").css("background-color", "green");
    	}, function(){
    	$("#quiz").css("background-color", "#3cae55");
    	});
	
});