var n = [];
var i = 0;
var res = 0;

console.log("Listes des nombres")
console.log("==================")
while (n != ""){
    
    n = parseInt(prompt("Saisir un nombre"))
    res+=n;
    i++;
    console.log(res)
}
res/=i;
alert("la minimum vaut " + Math.min(res)+ "Le maximum vaut : "+Math.max(res));