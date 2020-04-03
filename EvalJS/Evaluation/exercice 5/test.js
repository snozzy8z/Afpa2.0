var n = parseInt(prompt("Veuillez saisir la table de multiplication"));
// On créer une fonction TableMultiplication
function TableMultiplication(n) {
    var res = 0;
    var i = 0;
    var j = 10; // pour limiter la table de multiplication a 10.
    for (i; i <= j; i++) {
        res = i * n;
        console.log(res)
        alert(+i + "x" + n + "=" + res);
    }
}
TableMultiplication(n)
