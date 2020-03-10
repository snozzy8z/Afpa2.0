var n = 1;
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