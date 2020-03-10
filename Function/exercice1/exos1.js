var x = 5;
var y = 3;


//Fonction cube//
function cube(y){       
    y = Math.pow(y, 3)   //ON VIEN CALCULER LE  CUBE DU NOMBRE Y//
    return y;   // ON RETOURNE y A LA VARIABLR 'R' //
}

var result = cube(y);

function produit(y, x){
    var r = y*=x
    return r;
}

var resultat = produit(y, x)

function afficheImg(image){
    document.getElementById("img").innerHTML = "<img src = "+ image+">"+"\n"+"Le cube de "+y+" est egal a "+ result+"\n"+ " Le produit de " +y+" x "+x+" est egal à "+resultat
}
afficheImg("img/papillon.jpg");