var flotte = new affImg('img/sprite_jeu.gif',0,0,50,50,100,100);

flotte.srcX = 50;
flotte.srcY = 0;
var cpt = 0;
function loop(){

	cpt++;
	flotte.setSrcX(cpt);
	flotte.srcX = 150;
	flotte.draw();

	window.requestAnimFrame(loop);
}
