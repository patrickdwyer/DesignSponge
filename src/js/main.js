jQuery(function ($) {
/* -----------------------------------------
	Plugins
----------------------------------------- */

	// matchHeight
	$('.match-height').matchHeight();

	// FitText.js
	$(".responsive_headline").fitText();

	// off-canvas menu
	$('[data-toggle="offcanvas"]').click(function () {
		$('.sidebar-offcanvas').toggleClass('active')
	});

	// change icons on accordion
	$('.collapse').on('shown.bs.collapse', function(){
		$(this).parent().find(".fa-angle-down").removeClass("fa-angle-down").addClass("fa-angle-up");
	}).on('hidden.bs.collapse', function(){
		$(this).parent().find(".fa-angle-up").removeClass("fa-angle-up").addClass("fa-angle-down");
	});

	// slide dropdown effect for post filters
	$('.dropdown').on('show.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideDown();
	});
	$('.dropdown').on('hide.bs.dropdown', function(e){
		$(this).find('.dropdown-menu').first().stop(true, true).slideUp();
	});

	// search form
	// remove search if user resets form or hits esc
	$('body, .navbar-collapse form[role="search"] button[type="reset"]').on('click keyup', function(event) {
		console.log(event.currentTarget);
		if (event.which == 27 && $('.navbar-collapse form[role="search"]').hasClass('active') ||
			$(event.currentTarget).attr('type') == 'reset') {
			closeSearch();
		}
	});

	function closeSearch() {
		var $form = $('.navbar-collapse form[role="search"].active')
		$form.find('input').val('');
		$form.removeClass('active');
	}

	// show search if form is not active // event.preventDefault() is important, this prevents the form from submitting
	$(document).on('click', '.navbar-collapse form[role="search"]:not(.active) button[type="submit"]', function(event) {
		event.preventDefault();
		var $form = $(this).closest('form'),
			$input = $form.find('input');
		$form.addClass('active');
		$input.focus();

	});

});
