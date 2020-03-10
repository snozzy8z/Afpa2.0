function nbLettre(lettre, phrase) {
    phrase2 = phrase.split(lettre);
    nbLettreTrouve = phrase2.length - 1;
    return nbLettreTrouve;

}
alert(nbLettre("", "Le chien vas chercher la balle"));