var tab = [];
var i = 0;
var adu = 0;
var vie = 0;
var jeu = 0;
//  On rempli le tableau seulement si tab[i] est différent de 100.
while (tab[i - 1] != 100 && tab[i - 1] != 18) {
    tab[i] = parseInt(prompt("Quels sont les âges successifs de votre groupe ?"));
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