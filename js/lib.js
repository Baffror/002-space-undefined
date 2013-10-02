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

var affImg = function(src,srcX,srcY,width,height,x,y){

	var img = new Image();
	img.src = src;

	this.srcX = srcX;
	this.srcY = srcY;
	this.width = width;
	this.height = height;
	this.x = x;
	this.y = y;


	this.draw = function(){

		if (ctx) {
			ctx.drawImage(img,srcX,srcY,width,height,x,y,width,height);
		} else {
			console.log('ctx indéfini');
		}

	}
	this.setSrcX = function(newSrcX){
		this.srcX = newSrcX;
	}

	this.valeur = function(){
		console.log('srcX=>'+srcX+'srcY=>'+srcY+'width=>'+width+'height=>'+height+'x=>'+x+'y=>'+y)
	}
}

