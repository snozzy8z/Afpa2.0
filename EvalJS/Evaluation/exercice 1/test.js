var PU = parseInt(prompt("Saisir le prix unitaire"));
var QTECOM = parseInt(prompt("Saisissez la quantité voulu"));
var PAP = 0;
var PORT = 0;
var REM = "";
var TOT = PU * QTECOM;
// On viens verifier si TOT est bien entre 100 et 200 alors ---> 5% de remise.
if ((TOT >= 100) && (TOT <= 200)) {
    REM = "5%";
    TOT = TOT * 0.95;
} else if (TOT > 200) {
    REM = "10%";
    TOT = TOT * 0.90;
} else {
    REM = "0%";
    TOT = TOT;
}
console.log(TOT)
    //On viens vérifier si TOT est bien inférieur à 500 et si le port et inférieur a 6 alors PORT = 6 car le PORT minimum est de 6 € .
if (TOT < 500) {
    PORT = TOT * 0.02;
    if (PORT < 6) {
        PORT = 6;
    }
}
PAP = TOT + PORT;
console.log(PAP);
alert("Frais de port: " + PORT + "€" + "\n" + "Remise: " + REM + "\n" + "Prix à payer: " + PAP);