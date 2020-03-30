// Tu dois coder toi-même l'algorithme permettant de trouver le minimum et le maximum

var entier = parseInt(prompt("Veuillez saisir la longueur du tableau"));
var tab = Array(entier);

for (i = 0; i < tab.length; i++)

    tab[i] = prompt("Veuillez saisir vos valeurs")

alert("Le maximum est de " + Math.max(...tab) + " et le minimum est de " + Math.min(...tab));