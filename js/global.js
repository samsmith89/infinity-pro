/**
 * This script adds the jquery effects to the Infinity Pro Theme.
 *
 * @package Infinity\JS
 * @author StudioPress
 * @license GPL-2.0+
 */

(function ($) {

	var $body = $('body'),
		$content = $('.offscreen-content'),
		headerHeight = $('.site-header').height(),
		$siteHeader = $('.site-header'),
		$siteInner = $('.site-inner'),
		sOpen = false,
		windowHeight = $(window).height();

	$(document).ready(function () {

		// Match height for content and sidebar.
		$('.content, .sidebar').matchHeight({
			property: 'min-height'
		});

		// Set offscreen container height.
		$('.offscreen-container').css({
			'height': windowHeight + 'px'
		});

		// Toggle the offscreen content.
		$('.offscreen-content-toggle').click(function () {
			__toggleOffscreenContent();
		});

	});

	// Add white class to site container after 50px.
	$(document).on('scroll', function () {

		if ($(document).scrollTop() > 50) {
			$('.site-container').addClass('white');

		} else {
			$('.site-container').removeClass('white');
		}

	});

	// Push the .site-inner down dependant on the header height.
	if (!$body.hasClass('front-page')) {

		__repositionSiteHeader(headerHeight, $siteInner);

		$(window).resize(function () {

			// Update header height value.
			headerHeight = $siteHeader.height();
			__repositionSiteHeader(headerHeight, $siteInner);


		});

	}

	// Function to toggle the offscreen content.
	function __toggleOffscreenContent() {

		if (sOpen) {
			$content.fadeOut();
			$body.toggleClass('no-scroll');
			sOpen = false;
		} else {
			$content.fadeIn();
			$body.toggleClass('no-scroll');
			sOpen = true;
		}

	}

	// Function to get the CSS value of the position property of the passed element.
	function __getPositionValue(selector) {

		var position = $(selector).css('position');

		return position;

	}

	// Function to position the site header.
	function __repositionSiteHeader(headerHeight, $siteInner) {

		if ('fixed' == __getPositionValue('.site-header')) {
			$siteInner.css('margin-top', headerHeight + 'px');
		} else {
			$siteInner.removeAttr('style');
		}

	}

	// My Custom page scroll to links.

	// $(document).ready(function () {
	// 	// Add smooth scrolling to all links
	// 	$("a").on('click', function (event) {


	// 		if (this.hash !== "") {
	// 			// Prevent default anchor click behavior
	// 			event.preventDefault();

	// 			// Store hash
	// 			var hash = this.hash;

	// 			// jQuery's animate() method to add smooth page scroll
	// 			// The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
	// 			$('html, body').animate({
	// 				scrollTop: $(hash).offset().top
	// 			}, 800, function () {

	// 				// Add hash (#) to URL when done scrolling (default click behavior)
	// 				window.location.hash = hash;
	// 			});
	// 		} // End if
	// 	});
	// });

})(jQuery);

function contactPackages() {
	const x = document.querySelector(".contact-packages");
	console.log(x);

	x.classList.toggle("hidden");
}
