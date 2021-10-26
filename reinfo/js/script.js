

jQuery(document).ready(function ($) {



	$('.feed-wrap-item').children('.feed-wrap-item-moar').on('click', function() {
		$(this).hide();
		$(this).parent().addClass('feed-wrap-item-active');
	});

	$('.menu-item-has-children').hover(function() {
		$(this).children('ul').slideDown(200);
		$(this).addClass('menu-mob-active');
	}, function() { 
		$(this).children('ul').slideUp(200);
		$(this).removeClass('menu-mob-active');
	});

	$('.offer-right').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true
	});

	$('.news-wrap').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 5,
		centerMode: false,
		centerPadding: '0px',
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1601,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 1246,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});
	$('.pride-wrap').slick({
		dots: false,
		infinite: true,
		speed: 300,
		slidesToShow: 3,
		centerMode: false,
		centerPadding: '0px',
		slidesToScroll: 1,
		arrows: true,
		responsive: [
			{
				breakpoint: 1601,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
		]
	});

	if (window.screen.width <= 992) {
		$('.burger').on('click', function() {
			$(this).toggleClass('burger-active');
			$('.mob-header-menu').slideToggle(200);
		});
	}
	if (window.screen.width <= 768) {
		$('.feed-wrap').slick({
			dots: false,
			infinite: false,
			speed: 300,
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true
		});
	}


	const programs = document.querySelector('.programs');

	if (programs) {
		const links = document.querySelectorAll('.programs-wrap-item-content');

		links.forEach((e) => {
			const links = e.querySelectorAll('a');

			if (links.length <= 2) {
				e.classList.add('full-width-programs');
			}
		})
	}




	$('.overlay').on('click', function() {
		$('.popup').fadeOut(300);
		$(this).fadeOut(300);
	});
	$('.close').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay').fadeOut(300);
	});

	$('.button-callback').on('click', function() {
		$('.popup').fadeIn(300);
		$('.overlay').fadeIn(300);
	});

	$('.feedback-wrap-gallery').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
      enabled: true
    }
		// other options
	});
	$('.years-magnific').magnificPopup({
		delegate: 'a', // child items selector, by clicking on it popup will open
		type: 'image',
		gallery: {
      enabled: true
    }
		// other options
	});


	$('.feedback-wrap-text-item .close').on('click', function() {
		if ($(this).parent().parent().hasClass('feedback-active')) {
			$(this).children('b').text('Развернуть');
			$(this).parent().parent().removeClass('feedback-active')
		} else {
			$(this).children('b').text('Свернуть');
			$(this).parent().parent().addClass('feedback-active')
		}
	});



}); //end