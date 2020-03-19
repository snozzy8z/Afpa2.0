// Exercice 1

var tableau = new Array(parseInt(prompt("Saisissez un nombre de colonnes")));

function tab() {

for (i = 0; i < tableau.length; i++)
{
        tableau[i] = parseInt(prompt("Saisissez une valeur à ajouter"));
        console.log(tableau);
}
}tab()
alert(tableau)