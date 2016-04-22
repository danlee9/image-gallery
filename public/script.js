$(function() {
	$('.fancybox').fancybox({
		helpers: {
			buttons: {}
		}
	});

	$('.filter').on('click', function() {
		var $this = $(this);
		if (!$this.hasClass('active')) {
			$('.filter').removeClass('active');
			$this.addClass('active');
			var $filter = $this.data('rel');
			$filter == 'all' ? 
				$('.fancybox').attr('data-fancybox-group', 'gallery').not(':visible').fadeIn() :
				$('.fancybox').fadeOut(0).filter(function() {
					return $(this).data('filter') == $filter;
				}).attr('data-fancybox-group', $filter).fadeIn(1000);
		}
	})
});