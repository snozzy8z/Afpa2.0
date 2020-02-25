/*var MyVar = "Bonjour";
window.alert(MyVar);
var reponse1 = window.prompt("Entrez votre nom");
var reponse2 = window.prompt("Entrez votre prénom");
var reponse3 = window.confirm("Êtes vous un homme  ?");
var sexe = "";

if (reponse3 == true) {
    sexe = "Monsieur";
}
else {
    sexe = "Madame";
}

window.alert(MyVar + " " + sexe + " " + reponse1 + " " + reponse2 + " " + reponse3);

var a = "100";
var b = 100;
var c = 1.00;
var d = true
 
window.alert("Ceci est une chaine de caractères :"+ a);
b = x--
c = a
d = false*/

/*var temperature = 40;
var tension = 20;
var pouls = 170;

if (temperature > 41 || (tension < 25 && pouls > 180 )) {
    window.alert("prevenir la famille !")
}
else {
    window.alert("le patient vas bien")
}*/

/*var p = window.prompt("Ecrivez un nombre")

if (p %2 == 0) {
    window.alert(p + "pair")
}
else {
    window.alert(p + "impair")
}*/

//Exercice 3

/*var année = 2020
var naissance = window.prompt("Veuillez entrez votre année de naissance")

if (année - naissance >= 18) {
    window.alert("Vous êtes majeur")
}
else {
    window.alert("Vous êtes mineur")
}*/


var Nombre = parseInt(window.prompt("Veuillez saisir un nombre entier"));
var operateur = window.prompt("Veuillez saisir un opérateur");
var Nombre2 = parseInt(window.prompt("Veuillez saisir un deuxième nombre entier"));
var resultat = Nombre + operateur + Nombre2;

if (operateur != "+" && operateur != "-" && operateur != "*" && operateur != "/") {
    window.alert("ceci est un opérateur erroné")
}
else {
    window.alert(resultat)
    
}