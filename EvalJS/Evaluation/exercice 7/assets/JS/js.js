var check = document.getElementById("envoi");
check.addEventListener("click", function verif(event) {
    // Déclaration des RegEx .
    var Reg = /(^[A-Z]+[A-Za-zéèêâîïëûçŒœæ\-\s]+$)/;
    var adresse = /(^[0-9]+[A-za-zéèêâîïëûçŒœæ\-\s]+$)|^$/;
    var mail = /(^[A-Za-z0-9éèêâîïëûçŒœæ\-_\.]+@{1}[a-zéèêâîïëûçŒœæ\-_]+[\.]{1}[a-z]+$)/;
    var date = /(^[1-2][0-9][0-9][0-9][\-]{1}[0-1][0-9]+[\-]{1}[0-3][0-9]+$)/;
    var code = /(^([0-9]{5})$)|^$/;
    var Reg2= /(^[A-Z]+[A-Za-zéèêâîïëûçŒœæ\-\s]+$)|^$/;
    // Je vais chercher mes variables .
    var nom = document.getElementById("nom").value;
    var prenom = document.getElementById("prenom").value;
    var sexem = document.getElementById("masculin").checked;
    var sexef = document.getElementById("feminin").checked;
    var naiss = document.getElementById("naissance").value;
    var CP = document.getElementById("code").value;
    var adrs = document.getElementById("adresse").value;
    var ville = document.getElementById("ville").value;
    var email = document.getElementById("mail").value;
    var sujet = document.getElementById("sujet").value;
    var question = document.getElementById("question").value;
    var accpt = document.getElementById("accepte").checked;
    // Je verifie que le nom est valide.
    if (!Reg.test(nom)) {
        document.getElementById("Errornom").textContent = "Cette zone est obligatoire. Utilisez que des caractères alphabétiques.";
        event.preventDefault();
    } else {
        document.getElementById("Errornom").textContent = "";
    }
    // Je verifie que le prenom est valide
    if (!Reg.test(prenom)) {
        document.getElementById("Errorprenom").textContent = "Cette zone est obligatoire. Utilisez que des caractères alphabétiques.";
        event.preventDefault();
    } else {
        document.getElementById("Errorprenom").textContent = "";
    }
    // Je verifie que la date de naissance est valide
    if (!date.test(naiss)) {
        document.getElementById("Errornaissance").textContent = "Cette zone est obligatoire. Date de naissance non valide.";
        event.preventDefault();
    } else {
        document.getElementById("Errornaissance").textContent = "";
    }
    // Je verifie que le code postale est valide
    if (!code.test(CP)) {
        document.getElementById("Errorcode").textContent = "Utilisez que des caractères numeriques.";
        event.preventDefault();
    } else {
        document.getElementById("Errorcode").textContent = "";
    }
    // Je verifie que l'adresse est valide
    if (!adresse.test(adrs)) {
        document.getElementById("Erroradrs").textContent = "Adresse incorrect.";
        event.preventDefault();
    } else {
        document.getElementById("Erroradrs").textContent = "";
    }
    // Je verifie que la ville est valide
    if (!Reg2.test(ville)) {
        document.getElementById("Errorville").textContent = "Utilisez que des caractères alphabétiques.";
        event.preventDefault();
    } else {
        document.getElementById("Errorville").textContent = "";
    }
    // Je verifie que le mail est valide
    if (!mail.test(email)) {
        document.getElementById("Errormail").textContent = "Cette zone est obligatoire. Adresse mail non valide.";
        event.preventDefault();
    } else {
        document.getElementById("Errormail").textContent = "";
    }
    // Je verifie que la zone question est valide
    if (!Reg2.test(question)) {
        document.getElementById("Errorquestion").textContent = "Cette zone est obligatoire.";
        event.preventDefault();
    } else {
        document.getElementById("Errorquestion").textContent = "";
    }
    // Je verifie que le sexe soit bien selectionner
    if (sexem == false && sexef == false) {
        document.getElementById("Errorsexe").textContent = "Cette zone est obligatoire. Selectionnez votre sexe.";
        event.preventDefault();
    } else {
        document.getElementById("Errorsexe").textContent = "";
    }
    // Je verifie que le sujet soit bien selectionner
    if (sujet == "sujet") {
        document.getElementById("Errorsujet").textContent = "Cette zone est obligatoire. Sélectionnez un choix.";
        event.preventDefault();
    } else {
        document.getElementById("Errorsujet").textContent = "";
    }
    // Je verifie que le formulaire soit bien coché
    if (!accpt == true) {
        document.getElementById("Erroraccpt").textContent = "Cette zone est obligatoire. Cochez pour validé le formulaire.";
        event.preventDefault();
    } else {
        document.getElementById("Erroraccpt").textContent = "";
    }
});