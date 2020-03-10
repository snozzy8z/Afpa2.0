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