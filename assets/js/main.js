/*
	Identity by Susheel Kumar Shukla
	github.com/bughunter-sks | @bughunter-sks
	Free for personal and commercial use under the CCA 3.0 license 
*/

(function ($) {

	var $window = $(window),
		$body = $('body'),
		$nav = $('#nav');

	// Breakpoints.
	breakpoints({
		xlarge: ['1281px', '1680px'],
		large: ['981px', '1280px'],
		medium: ['737px', '980px'],
		small: [null, '736px']
	});

	// Play initial animations on page load.
	$window.on('load', function () {
		window.setTimeout(function () {
			$body.removeClass('is-preload');
		}, 100);
	});

	// Scrolly.
	$('#nav a, .scrolly').scrolly({
		speed: 1000,
		offset: function () { return $nav.height(); }
	});

	// Mobile Navigation Toggle.
	var $menuToggle = $('#menu-toggle');

	$menuToggle.on('click', function () {
		$nav.toggleClass('mobile-open');
	});

	// Close menu after clicking a link.
	$('#nav a').on('click', function () {
		if ($window.width() <= 736)
			$nav.removeClass('mobile-open');
	});

	$('.dropbtn').on('click', function (e) {

		e.preventDefault();

		if ($(window).width() <= 736) {
			$(this).parent('.dropdown').toggleClass('open');
		}

	});

	// init AOS
	AOS.init({
		duration: 900,
		once: true,
	});
})(jQuery);