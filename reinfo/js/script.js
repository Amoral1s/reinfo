

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







	$('.overlay').on('click', function() {
		$('.popup').fadeOut(300);
		$(this).fadeOut(300);
	});
	$('.close').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay').fadeOut(300);
	});



function testWebP(callback) {
	var webP = new Image();
	webP.onload = webP.onerror = function () {
		callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
	if (support == true) {
		document.querySelector('html').classList.add('_webp');
	} else {
		document.querySelector('html').classList.add('_no-webp');
	}
}); // img >> webp html

}); //end