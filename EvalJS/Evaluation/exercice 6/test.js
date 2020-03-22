//On viens créer un tableau à objet définit.
var tab = ["Audrey", "Aurélien", "Flavien", "Jérémy", "Laurent", "Melik", "Nouara", "Salem", "Samuel", "Stéphane"];
console.log(tab);

//On viens faire une boucle do while qui execute au moins une fois les instructions avant de vérifier la condition .
do {
    var pre = prompt("Veuillez saisir un prenom");
    console.log(pre);
    tab = tab.filter(prenom => prenom != pre);
    console.log(tab);
    tab.length = 10;
    console.log(tab);



} while (pre != "");