var flotte = new affImg('img/sprite_jeu.gif',0,0,50,50,0,0);

var cpt = 0 ;
function loop(){

	ctx.clearRect(0,0,width,height);
	cpt++;
	flotte.draw(180);

	window.requestAnimFrame(loop);
}
