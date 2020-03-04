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
if (operateur == "/" && Nombre2 == 0) {
    alert("Erreur")
}
else {
    switch (operateur) {
        case "+":
            alert(Nombre + Nombre2)
            break;

        case "-":
            alert(Nombre - Nombre2)
            break;

        case "*":
            alert(Nombre * Nombre2)
            break;

        case "/":
            alert(Nombre / Nombre2)
            break;
    }
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
    pourcentage = pourcentage - 10;
}

pourcentage = pourcentage + (enfants * 10);

if (pourcentage < 50) {
    window.alert("Vous avez le droit à : " + pourcentage + "%" + " " + "de participation aux prix du repas ");
}
else {
    window.alert("la participation est plafonnée à 50%")
}*/

//LES BOUCLES//

//EXERCICE 1//


/*var i = 1;
var pre ;

while (i <=10 && pre != ""){
    pre = prompt("Saisisez le prénom N°"+i+ "\n" + "ou Clic sur Annuler pour arrêter la saisie.");
    i++;

    console.log("Prénom N°"+ i + "=" + pre)
}
console.log("fin de liste ")*/

//EXERCICE 2//


/*var N = parseInt(prompt("Saisissez un nombre entier"));


do 
{
    console.log("Nombre "+ " " + N )
    N--;
}while (N>=0);*/

//EXERCIE 3//

/*var n1 = parseInt(prompt("Saisisez un premier nombre"));
var n2 = parseInt(prompt("Saisissez un deuxieme nombre"));
let r = 0;
let v = 0;

do 
{
    r = r + n1;
    n1++;
    console.log(r)
}while(n1<=n2)*/

/*var n = 1;
var i = 0;
var res = 0;

console.log("Listes des nombres")
console.log("==================")
while (n != 0){
    
    n = parseInt(prompt("Saisir un nombre"))
    res+=n;
    i++;
    console.log(res)
}
alert("la somme des nombres vaut "+res);
res/=i;
alert("la moyenne vaut " +res);*/

//EXERCICE 6//
/*var mot = prompt("Veuillez saisir un mot")
var nbVoyelle = 0;
var i = 0;
for (i = 0; i < mot.length; i++) {
    if ((mot[i]=="a")||(mot[i]=="e")||(mot[i]=="i")||(mot[i]=="o")||(mot[i]=="u")||(mot[i]=="y")) {
        nbVoyelle++;
    }
}
console.log(mot + " contient " + nbVoyelle + " voyelle(s) " + "et "+ (mot.length - nbVoyelle) + " consonne(s)");*/

//EXERCICE 7//
/*var i = 0;
var nb = parseInt(prompt("veuillez saisir un nombre "));
var r = true;

for (i = 2; i < nb; i++){
    if (nb % i == 0) r = false;
}
alert(nb+" est premier : "+r)*/

//EXERCICE 8//

var magic = parseInt(Math.random()*100);

do 
{
    var nb = parseInt(prompt("Essayer de trouvez le nombre"));
    if (nb < magic){
    alert ( "Plus grand")
}
else {
    alert("Plus petit")
}
}while (nb != magic)

alert ("Bravo vous avez trouvez le numéro")