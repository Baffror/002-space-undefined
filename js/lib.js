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


	this.draw = function(angle){

		if ( angle === undefined ){ angle = 0; }

		if (ctx) {

			ctx.save();

			ctx.translate(width/2,height/2);
			ctx.rotate(Math.PI/180*angle);

			ctx.drawImage(img,this.srcX,this.srcY,this.width,this.height,this.posx,this.posy,this.width,this.height);

			ctx.restore();
		
		} else {
			console.log('ctx indéfini');
		}

	}

}

