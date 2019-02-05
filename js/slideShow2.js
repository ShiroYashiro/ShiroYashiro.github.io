$(document).ready(function(){
	slideShow();
	var i, slideIndex = 0;

	function slideShow(){
		var slides = $('.slides li');
		console.log(slides);

		for (var i = 0; i < slides.length; i++) {
			$(slides[i]).hide();
		}
		slideIndex++;
		if (slideIndex > slides.length)
			slideIndex = 1;
		$(slides[slideIndex-1]).show();
		setTimeout(slideShow, 4000);
	}

});