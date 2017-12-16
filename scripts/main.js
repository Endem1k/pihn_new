$(document).ready(function() {
	$('.main-slider_index').slick({
		autoplay: true,
		autoplaySpeed: 13000,
		fade: true,
  		cssEase: 'linear',
  		speed: 2000
	});

	$('.main-slider_index2').slick({
		autoplay: true,
		autoplaySpeed: 5000,
		fade: true,
  		cssEase: 'linear',
  		speed: 2000
	});

	$('.main-slider_index3').slick({
		autoplay: true,
		autoplaySpeed: 10000,
		fade: true,
  		cssEase: 'linear',
  		speed: 2000
	});

	$('.karta-ob2').click(function() {
		$('.karta-ob2_ans').toggleClass('active')
	});

	$('.button_karta').click(function() {
		$('.karta-ob2_ans').removeClass('active')
	});

	$('.karta-ob4').click(function() {
		$('.karta-ob4_contacts').toggleClass('active')
	});
});


