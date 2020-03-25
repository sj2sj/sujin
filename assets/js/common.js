
// modal open-close 
$('#modal_open_btn').click(function() {
	$('#modal').fadeIn();
	$.fn.fullpage.setAllowScrolling(false);
});

$('#modal_close_btn').click(function() {
	$('#modal').fadeOut();
	$.fn.fullpage.setAllowScrolling(true);
});