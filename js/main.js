$(document).ready(function(){

	$('body').on('onselectstart','#fLeft,#fRight',function(){
			$.fn.disableSelection = function() {
		        return this
		                 .attr('unselectable', 'on')
		                 .css('user-select', 'none')
		                 .on('selectstart', false);
		    };
	});

});