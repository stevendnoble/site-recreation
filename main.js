$(document).ready(function(){

	console.log("Sanity Check: JS is working!");

	alert("WARNING:  NOT FOR THE FAINT OF HEART.  If you are prone to seizures, please navigate away from this window.");

	function getRand(num1, num2) {
		return Math.round((num1 + (num2 - num1) * Math.random()));
	}

	var colorArray = ['pink',
										'salmon', 
										'yellow', 
										'green', 
										'blue', 
										'coral'];

	$('a').on('click', function (event) {
		color = colorArray[getRand(0,5)];
		$(this).css('font-style', 'oblique');
		$(this).css('color', color);
		event.preventDefault();
		$(this).blink();
	});

	$('p').on('mouseover', function (event) {
		color = colorArray[getRand(0,5)];
		$(this).css('color', color);
		$(this).css('font-size', 24);
	});

	$('li').on('mouseover', function (event) {
		color = colorArray[getRand(0,5)];
		$(this).css('color', color);
		$(this).css('font-size', 24);
	});

	$('h3').on('click', function (event) {
		$(this).fadeOut(6000);
	});


	$('img').on('click', function(event) {
		$(this).animate({
	    opacity: 'toggle',
 	  }, 12000, function() {
		});
	});


	var bkgColArray = ['lightpink',
										'lightsalmon', 
										'lightyellow', 
										'lightgreen', 
										'lightblue', 
										'lightcoral'];

	$(window).on('scroll', function (event) {
		color = bkgColArray[getRand(0, 5)];
		$('.panel-body').css('background-color', color);
		color = bkgColArray[getRand(0, 5)];
		$('.img-embedded').css('background-color', color);
		color = bkgColArray[getRand(0, 5)];
		$('body').css('background-color', color);
		console.log("Background Check!!");
	});	
});