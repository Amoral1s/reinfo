document.addEventListener('DOMContentLoaded', () => { //start













	$('.overlay').on('click', function() {
		$('.popup').fadeOut(300);
		$(this).fadeOut(300);
	});
	$('.close').on('click', function() {
		$('.popup').fadeOut(300);
		$('.overlay').fadeOut(300);
	});

	$(window).scroll(function() { 
		if ($(window).scrollTop() > 20) {
			$('.up-arr').fadeIn(100);
		} else {
			$('.up-arr').fadeOut(100);
		}
	 });

	const links = document.querySelectorAll('a');

	if (links) {
		links.forEach((elem) => {
			if (elem.href.indexOf('#') != -1) {
				elem.classList.add('click');
			}
		});
	}

	$(".click").click(function () {
		var elementClick = $(this).attr("href");
		var destination = $(elementClick).offset().top - 00;
		$("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 500);
		return false;
	});

	const selects = document.querySelectorAll('select');
	if (selects) {
		selects.forEach((elem) => {
				elem.parentElement.classList.add('select-wrapper');
		});
	} //end selects forEach / Добавление стрелочки к обертке select

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