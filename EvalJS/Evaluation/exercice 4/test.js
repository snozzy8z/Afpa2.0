// La condition d'arrêt de la boucle n'est pas correcte


var tab = [];
var i = 0;
var adu = 0;
var vie = 0;
var jeu = 0;
//  On rempli le tableau seulement si tab[i] est différent de 100.
while (tab[i - 1] != 100) {
    tab[i] = parseInt(prompt("Entrez un age"));
    // Je viens incrémenter selon la verification des conditions présenter.
    if (tab[i] < 20) {
        jeu++;
    } else if (tab[i] > 40) {
        vie++;
    } else {
        adu++;
    }
    i++;
};
alert("Dans votre groupe il y a " + jeu + "  jeunes ," + adu + " d'adultes et " + vie + " petits vieux");