var flotte = new affImg('img/sprite_jeu.png',0,0,50,50,0,0);

var cpt = 0 ;
function loop(){

	ctx.clearRect(0,0,width,height);
	cpt++;
	flotte.draw();

	window.requestAnimFrame(loop);
}
