var i = 0;
var nb = parseInt(prompt("veuillez saisir un nombre "));
var r = true;

for (i = 2; i < nb; i++){
    if (nb % i == 0) r = false;
}
alert(nb+" est premier : "+r)