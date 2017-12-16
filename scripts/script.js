$(document).ready(function() {
	$('.main-slider').slick({
		dots: true,
		arrows: true,
		autoplay: true,
		autoplaySpeed: 7000,
		speed: 2000
	});

	$('.map-point_front').click(function() {
    var hasClass = $(this).parent().parent().hasClass('active');
    $(".city").removeClass('active');
		if (!hasClass)
      $(this).parent().parent().toggleClass('active');
	});	

	$('.map-point_front_stock').click(function() {
			$(this).parent().parent().toggleClass('active');
	});	

	$(window).scroll(function() {
     		$('.hels-header').addClass('active');
    });


	$('.church_bg').click(function() {
		$('.city_places').toggleClass('church');
	});

	$('.sthg_woks').click(function() {
		$('.city_places').removeClass('church');
	});

	$('.atenium_bg').click(function() {
		$('.city_places').toggleClass('atenium');
	});

	$('.but_not_at_all').click(function() {
		$('.city_places').removeClass('atenium');
	});

	$('.station_bg').click(function() {
		$('.city_places').toggleClass('station');
	});

	$('.i_did_it_i_guess').click(function() {
		$('.city_places').removeClass('station');
	});

	$('.sybilius_bg').click(function() {
		$('.city_places').toggleClass('sybilius');
	});

	$('.sthg_good').click(function() {
		$('.city_places').removeClass('sybilius');
	});

    $(".fst-link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  	});

  	$(".snd-link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  	});

  	$(".tth-link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  	});

  	$(".fth-link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  	});

  	$(".ffth-link").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  	});


});





