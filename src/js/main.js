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

	var mq = window.matchMedia( "(min-width: 768px)" );
	if (mq.matches) {
		// search form - toggle .opaque class on navbar <li>
		$('.sb-search').click(function(){
			$('.main-menu').toggleClass('opaque');
		});
	}

});
