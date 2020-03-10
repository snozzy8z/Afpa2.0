// var x = 5;
// var y = 3;


// //Fonction cube//
// function cube(y){       
//     y = Math.pow(y, 3)   //ON VIEN CALCULER LE  CUBE DU NOMBRE Y//
//     return y;   // ON RETOURNE y A LA VARIABLR 'R' //
// }

// var result = cube(y);

// function produit(y, x){
//     var r = y*=x
//     return r;
// }

// var resultat = produit(y, x)

// function afficheImg(image){
//     document.getElementById("img").innerHTML = "<img src = "+ image+">"+"\n"+"Le cube de "+y+" est egal a "+ result+"\n"+ " Le produit de " +y+" x "+x+" est egal à "+resultat
// }
// afficheImg("img/papillon.jpg");

//EXERCICE 2//

// function nbLettre(lettre, phrase) {
//     phrase2 = phrase.split(lettre);
//     nbLettreTrouve = phrase2.length - 1;
//     return nbLettreTrouve;

// }
// alert(nbLettre("", "Le chien vas chercher la balle"));

// //EXERCICE3//
// /*var menu = prompt("1 - Multiples" + "\n" + "2- Somme et moyenne" + "\n" + "3- Recherche du nombre de voyelles" + "\n" + "4- Recherche du nombre des caracteres suivants" + "\n" + "Entrez votre option:");

// switch (menu) {
//     case "1":
//         var n = 0;
//         var x = parseInt(prompt("Veuillez saisir un nombre"));
//         function multiples(n, x) {
//             for (n = 0; n <= 10; n++) {
//                 result = n * x
//             alert("Résultats" + "\n" + "======================" + "\n" + n + "*" + x + "=" + result);
//         }
//     }
//         multiples(n, x);
//         break;

//     case "2":
//         function sommeMoyenne() {
//             var n = 1;
//             var i = 0;
//             var res = 0;

//             ("Listes des nombres")
//             while (n != 0) {

//                 n = parseInt(prompt("Saisir un nombre"))
//                 res += n;
//                 i++;
//                 console.log(res)
//             }
//             alert("Listes des nombres" + "\n" + "==================" + "\n" + "la somme des nombres vaut " + res);
//             res /= i;
//             alert("Listes des nombres" + "\n" + "==================" + "\n" + "la moyenne vaut " + res);
//         }
//         sommeMoyenne();
//         break;

//     case "3":
//         function Voyelle() {
//             var mot = prompt("Veuillez saisir un mot")
//             var nbVoyelle = 0;
//             var i = 0;
//             for (i = 0; i < mot.length; i++) {
//                 if ((mot[i] == "a") || (mot[i] == "e") || (mot[i] == "i") || (mot[i] == "o") || (mot[i] == "u") || (mot[i] == "y")) {
//                     nbVoyelle++;
//                 }
//             }
//             alert(mot + " contient " + nbVoyelle + " voyelle(s) " + "et " + (mot.length - nbVoyelle) + " consonne(s)");
//         }
//         Voyelle();
//         break;

//     case "4":
//         var phrase = prompt("veuillez saisir une phrase")
//         var lettre;
//         function nbLettre(lettre, phrase) {
//             phrase2 = phrase.split(lettre);
//             nbLettreTrouve = phrase2.length - 1;
//             return nbLettreTrouve;

//         }
//         alert(nbLettre("", phrase))
//         break;
// }
// console.log()*/

// //EXERCICE 4//

// var str1 = window.prompt("saisissez la chaine");
// var str2 = window.prompt("saisissez le separateur saisie");
// var n = parseInt(window.prompt("saisissez une valeur"));
// function strtok(str1, str2, n) {

//     var tableau = str1.split(str2);
//     window.alert(tableau[n-1])
// }

// strtok(str1, str2, n)

// 

