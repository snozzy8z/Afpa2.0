// Définir le nombre de colonnes dans le tableau

function GetInteger() {
    entier = parseInt(prompt("Saisissez la longueur du tableau"));
    console.log(entier);
} GetInteger()

// Créer le tableau

function InitTab() {
    tableau = new Array(entier);
    console.log(tableau);
} InitTab()

// Définir les valeurs à rentrer dans le tableau

function SaisieTab() {
    for (i = 0; i < tableau.length; i++)
        tableau[i] = parseInt(prompt("Saisissez vos valeurs"));
    console.log(tableau);
} SaisieTab()

// Affichage du tableau sur la page

function AfficheTab() {
    afftab = tableau;
    document.getElementById("tableau").innerHTML = afftab;
    console.log(afftab);
}

// Rechercher à quel rang se situe la valeur choisie

function RechercheTab() {
    rang = parseInt(prompt("Saisissez le rang"));
    alert(tableau[rang - 1])
    console.log(tableau[rang - 1])
}

// Définir la valeur max et la moyenne des valeurs du tableau

function InfoTab() {
    alert("Le nombre à la plus grande valeur est" + " " + Math.max(...tableau));
    console.log(Math.max(...tableau));

    for (i = 0; i < n; i++) {
        somme += tableau[i]
        resultat = somme / n
        console.log(resultat)
    }
    alert("La moyenne des valeurs du tableau est" + " " + resultat)
}
// Définition des variables

var resultat = somme / n
var n = tableau.length
var somme = 0
var entier;
var tableau;
var afftab;
var rang;

// Affichage du menu 

var menu = parseInt(prompt("1-Affichage du contenu de tous les postes du tableau" + "\n" + "2-Affichage du contenu d’un poste dont l’index est saisi au clavier" + "\n" + "3-Affichage du maximum et de la moyenne des postes du tableau" + "\n" + "4-Quitter"));

switch (menu) {
    case 1: // Affichage du contenu de tous les postes du tableau
        AfficheTab()
        break;

    case 2: // Affichage du contenu d’un poste dont l’index est saisi au clavier
        RechercheTab()
        break;

    case 3: // Affichage du maximum et de la moyenne des postes du tableau
        InfoTab()
        break;

    case 4: // Break
        break;
}