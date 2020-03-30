// Il est demandé la somme des entiers INFERIEUR à N

var n = parseInt(prompt("Saisissez un nombre entier N"));
var i = 0;
var r = 0;
//Je fais une boucle for qui viens incrémenter le compteur i.
for (i; i <= n; i++)
//J'addition le résultat (r = r + i;)
    r += i;
alert("la somme des entiers N est de " + r);