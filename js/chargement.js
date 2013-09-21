function updateProgress(valeur){
	$('#progress').attr('value',valeur);
}
function affMenu(){

	if ( $('#load').length === 1 ){
		$('#load').remove();
	}

	$('body').prepend('<div id="menu"><div id="perso" class="perso perso1 spritePerso"></div><div id="bonus">Bonus gérer via JS</div><div id="level" class="bouton">Difficulté</div><div id="start" class="bouton">Démarrer</div></div>');

}


var cpt = 0;
var interval = setInterval(function(){

	cpt+=20;
	if ( cpt < 101 ){
		updateProgress(cpt);
	} else {
		clearInterval(interval);
		affMenu();
	}

},1000);