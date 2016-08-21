jQuery(document).ready(function ($) {

	function winner() {
		$(".13").html("WIN!");
	}

	$(".body-cell").click(function () {
       
   		if (!$(this).hasClass("red")) {
        	$(this).addClass("red");
	    } else {
    	    $(this).removeClass("red");
	    }

		// left and right
		if (($(".1").hasClass("red")) && ($(".2").hasClass("red")) && ($(".3").hasClass("red")) && ($(".4").hasClass("red")) && ($(".5").hasClass("red"))) {
			$(".1, .2, .3, .4, .5").addClass("winner");
			winner();
		}

		if (($(".6").hasClass("red")) && ($(".7").hasClass("red")) && ($(".8").hasClass("red")) && ($(".9").hasClass("red")) && ($(".10").hasClass("red"))) {
			$(".6, .7, .8, .9, .10").addClass("winner");
			winner();
		}

		if (($(".11").hasClass("red")) && ($(".12").hasClass("red")) && ($(".13").hasClass("free")) && ($(".14").hasClass("red")) && ($(".15").hasClass("red"))) {
			$(".11, .12, .13, .14, .15").addClass("winner");
			winner();
		}

		if (($(".16").hasClass("red")) && ($(".17").hasClass("red")) && ($(".18").hasClass("red")) && ($(".19").hasClass("red")) && ($(".20").hasClass("red"))) {
			$(".16, .17, .18, .19, .20").addClass("winner");
			winner();
		}

		if (($(".21").hasClass("red")) && ($(".22").hasClass("red")) && ($(".23").hasClass("red")) && ($(".24").hasClass("red")) && ($(".25").hasClass("red"))) {
			$(".21, .22, .23, .24, .25").addClass("winner");
			winner();
		}


		// up and down
		if (($(".5").hasClass("red")) && ($(".10").hasClass("red")) && ($(".15").hasClass("red")) && ($(".20").hasClass("red")) && ($(".25").hasClass("red"))) {
			$(".5, .10, .15, .20, .25").addClass("winner");
			winner();
		}

		if (($(".4").hasClass("red")) && ($(".9").hasClass("red")) && ($(".14").hasClass("red")) && ($(".19").hasClass("red")) && ($(".24").hasClass("red"))) {
			$(".4, .9, .14, .19, .24").addClass("winner");
			winner();
		}

		if (($(".3").hasClass("red")) && ($(".8").hasClass("red")) && ($(".13").hasClass("free")) && ($(".18").hasClass("red")) && ($(".23").hasClass("red"))) {
			$(".3, .8, .13, .18, .23").addClass("winner");
			winner();
		}

		if (($(".2").hasClass("red")) && ($(".7").hasClass("red")) && ($(".12").hasClass("red")) && ($(".17").hasClass("red")) && ($(".22").hasClass("red"))) {
			$(".2, .7, .12, .17, .22").addClass("winner");
			winner();
		}

		if (($(".1").hasClass("red")) && ($(".6").hasClass("red")) && ($(".11").hasClass("red")) && ($(".16").hasClass("red")) && ($(".21").hasClass("red"))) {
			$(".1, .6, .11, .16, .21").addClass("winner");
			winner();
		}


		// crosses
		if (($(".1").hasClass("red")) && ($(".7").hasClass("red")) && ($(".13").hasClass("free")) && ($(".19").hasClass("red")) && ($(".25").hasClass("red"))) {
			$(".1, .7, .13, .19, .25").addClass("winner");
			winner();
		}
	
		if (($(".5").hasClass("red")) && ($(".9").hasClass("red")) && ($(".13").hasClass("free")) && ($(".17").hasClass("red")) && ($(".21").hasClass("red"))) {
			$(".5, .9, .13, .17, .21").addClass("winner");
			winner();
		}

	});

});
