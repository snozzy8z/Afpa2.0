var n = parseInt(prompt("Veuillez saisir la table de multiplication"));
// On créer une fonction TableMultiplication
function TableMultiplication() {
    var res = 0;
    var i = 0;
    
    // quelle est l'utilité de cette variable?
    var j = 10;
    for (i; i <= j; i++) {
        res = i * n;
        alert(+i + "x" + n + "=" + res);
    }
}
TableMultiplication(n)