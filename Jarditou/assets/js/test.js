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

//Exercice 2

/*var année = 2020
var naissance = window.prompt("Veuillez entrez votre année de naissance")

if (année - naissance >= 18) {
    window.alert("Vous êtes majeur")
}
else {
    window.alert("Vous êtes mineur")
}*/


/*var Nombre = parseInt(window.prompt("Veuillez saisir un nombre entier"));
var operateur = window.prompt("Veuillez saisir un opérateur");
var Nombre2 = parseInt(window.prompt("Veuillez saisir un deuxième nombre entier"));


if (operateur != "+" && operateur != "-" && operateur != "*" && operateur != "/") {
    window.alert("ceci est un opérateur erroné")
}
else {
    if (operateur == "+")
        window.alert(Nombre + Nombre2)
    else if (operateur == "-")
        window.alert(Nombre - Nombre2)
    else if (operateur == "*")
        window.alert(Nombre * Nombre2)
    else if (operateur == "/")
        window.alert(Nombre / Nombre2)

}*/

//EXERCICE 4//

/*var marie = window.confirm("êtes-vous marié");
var enfants = parseInt(window.prompt("Combien avez-vous d'enfants ?"));
var salaire = parseInt(window.prompt("Quel est votre salaire mensuel ?"));
var pourcentage;

if (marie) {
    pourcentage = 25;
}
else {
    pourcentage = 20;
}


if (salaire < 1200) {
    pourcentage = pourcentage + 10;
}

pourcentage = pourcentage + (enfants * 10);

if (pourcentage < 50) {
    window.alert("Vous avez le droit à : " + pourcentage + "%" + " " + "de participation aux prix du repas ");
}
else {
    window.alert("la participation est plafonnée à 50%")
}*/

//LES BOUCLES//


/*var prenom = "";
var i = 1;

do
{
    prenom = window.prompt("Saisissez le prénom N°" + i + "\n ou clic sur Annuler pour arrêter la saisie")
    if (prenom != ""){
        prenom = prenom;
    }
    console.log(prenom);
    i++
}while(prenom)*/

//EXERCICE 2 BOUCLES//

/*var N = parseInt(window.prompt("donnez une valeur a  la variable 'N'"));
for (i=N; 0<=i; i--)
{
    console.log(i)
}
console.log("fin de boucle");*/

//EXERCICE 3 BOUCLES//

/*var n1 = parseInt(prompt("Veuillez saisir un nombre entier"));
var n2 = parseInt(prompt("Veuillez saisir un nombre entier"));
var resultat = 0;

for (i=0; i<=n2-n1; i++){
    resultat = n1 + i + resultat 
    console.log( resultat )
}*/

//EXERCICE 4//

var nb = prompt("Veuillez saisir un nombre");
var res = 0;
var i = 0;

while (nb != 0) 
{
    res = parseInt(res) + parseInt(nb);
    nb = prompt("Veuillez entrez un nombre");
    i++;
}
alert("la somme des nombre vaut" + " " + res);
res /= i;
alert("La moyenne vaut :" + res);