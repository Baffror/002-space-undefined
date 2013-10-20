$('body').on('click','#canvas',function(e){
	
	flotte.angle = returnAngle(e.pageX,e.pageY);

})