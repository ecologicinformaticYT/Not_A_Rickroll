//functions
function stop(){
    /*
    Retire le rickroll, puis, affiche la musique cool
    */
    //hide the rickroll zone
    document.getElementById("rickroll").style.visibility = 'hidden';
    document.getElementById("rickroll").style.width = '0px';
    document.getElementById("rickroll").style.height = '0px';
    //hide the stop button
    document.getElementById("stop").style.visibility = 'hidden';
    document.getElementById("stop").style.width = '0px';
    document.getElementById("stop").style.height = '0px';
    //display the cool music
    document.getElementById("cool_music").style.visibility = 'visible';
}

function rickroll_(){
    /*
    Vous aviez vraiment cru qu'on allait laisser les gens qui ont mauvais goût rester ici ?
    */
    alert("Alerte au 10^100 (gogol) les enfants !");
    let i = 0;
    while (i<10){
        alert("Vous avez trop mauvais goût ! Fermez ce site !");
        i++
    }
}

function react_to_like_(){
    /*
    Dernière étape du test de coolitude
    */
    document.getElementById("react_to_like").style.visibility = 'visible';

}

function react_to_climber_(){
    /*
    Personne cool détectée, offrez-lui du chocolat !
    */
    document.getElementById("react_to_climber").style.visibility = 'visible';

}

/*
Tu lis mon code ?
Et pourquoi pas lire mes pensées pendant qu'on y est ????

dsqfiuy,pioruzfeaw
dfiqqqqqqqqezopufh
duyiro,ezafhuyigie
qsioyrs,hreuizaynt
<uoipfezytuygyreoo
_<çyapzeuiezytrfez
ipzaeuyteuza_nytz_
*/