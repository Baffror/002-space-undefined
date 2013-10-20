window.requestAnimFrame = (function(){
    return window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame  ||
    window.mozRequestAnimationFrame     ||
    window.oRequestAnimationFrame       ||
    window.msRequestAnimationFrame      ||
    function(callback){
        window.setTimeout(callback, 1000/30);
    };
})();

var affImg = function(s,sX,sY,w,h,x,y){

	var img = new Image();
	img.src = s;

	this.srcX = sX;
	this.srcY = sY;
	this.width = w;
	this.height = h;
	this.posx = x-this.width/2;
	this.posy = y-this.height/2;
	this.angle=0;


	this.draw = function(){

		if (ctx) {

			ctx.save();

			ctx.translate(width/2,height/2);
			ctx.rotate(Math.PI/180*this.angle);

			ctx.drawImage(img,this.srcX,this.srcY,this.width,this.height,this.posx,this.posy,this.width,this.height);

			ctx.restore();
		
		} else {
			console.log('ctx indéfini');
		}

	}

}


/******** CALCUL d'ANGLE **********/
function returnAngle(clicX,clicY){

	var angle = 0;

	if ( clicX === width/2 && clicY >= height/2 ){
		angle = 270;
	} else if ( clicX === width/2 && clicY < height/2 ){
		angle = 90;
	} else if ( clicY === height/2 && clicX <= width/2 ){
		angle = 180;
	} else if ( clicY === height/2 && clicX > width/2 ){
		angle = 0;
	} else {

		if ( clicX > width/2 && clicY > height/2 ){
			var ab = clicY-height/2;
			var bc = clicX-width/2;
			angle = 0;
		} else if ( clicX < width/2 && clicY > height /2 ){
			var ab = width/2-clicX;
			var bc = clicY-height/2;
			angle = 90;
		} else if ( clicX < width/2 && clicY < height/2 ){
			var ab = height/2-clicY;
			var bc = width/2-clicX;
			angle = 180;
		} else if ( clicX > width/2 && clicY < height/2 ){
			var ab = clicX-width/2;
			var bc = height/2-clicY;
			angle = 270;
		}

		var ac = Math.round(Math.sqrt( Math.pow(ab,2)+Math.pow(bc,2) ));

		angle += (Math.acos((Math.pow(bc,2)+Math.pow(ac,2)-Math.pow(ab,2))/ (2*bc*ac)))* 180 / Math.PI;
	
	}

	return angle;

}