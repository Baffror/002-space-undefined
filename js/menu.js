var perso = 0;


/******************************************* CHANGEMENT LEADER *****************************************************/
function changeLeader(direction){

	$('#perso').removeClass('perso'+perso);

	perso += direction;
	if( perso > 4 ){ perso = 0; }
	if( perso < 0 ){ perso = 4; }

	$('#perso').addClass('perso'+perso);

	var desc = 'Bonus de vitesse : '+paramLeader[perso][0]+'%';
	desc += '<br />Bonus de stockage : '+paramLeader[perso][1]+'%';

	$('#leaderDesc').html(desc);

}

$('body').on('click','#fLeft,#fRight',function(){
	if ( $(this).attr('id') === 'fLeft' ){
		changeLeader(-1);
	} else {
		changeLeader(1);
	}
});

/******************************************* DEMARRAGE PARTIE ***********************************************/
$('body').on('click','#start',function(){
	$('#menu').remove();

	$('body').prepend('<canvas id="canvas" width="'+width+'" height="'+height+'"></canvas>');

	elem = document.getElementById('canvas');
	ctx = elem.getContext('2d');

	loop();
});