function updateProgress(valeur){
	$('#progress').attr('value',valeur);
}
function affMenu(){

	if ( $('#load').length === 1 ){
		$('#load').remove();
	}

	$.get(
		 'html/menu.html',
		 function (retour){
		 	$('body').prepend(retour);

		 	var desc = 'Bonus de vitesse : '+paramLeader[perso][0]+'%';
		 	desc += '<br />Bonus de stockage : '+paramLeader[perso][1]+'%';
		 	$('#leaderDesc').html(desc);
		 	
		 },
		 'html'
		 );

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

},10);