// console.info(document.getElementById('montexte'));
// console.info(document.getElementById('monbouton'));
// console.info(document.getElementById('madiv'));

// function mafonction() {
//     console.info('vous avez cliqué sur le bouton !')
// }

document.getElementById('montexte').value = "la valeur qui m'intéresse"
document.getElementById('monbouton').value = "BOUTON CLIQUE !"
document.getElementById('madiv').innerHTML = "ma div a été modifiée"


// EXO 1 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT BIENVENUE SUR LE BOUTTON
function welcome() {
    alert('Bienvenue sur le bouton !')
}

// EXO 2 LORSQU ON CLIQUE SUR LE BOUTON IL Y A UNE ALERT AFFICHANT CE QUI ECRIT SUR LE BOUTON
function mafonction() {
    alert(document.getElementById('monbouton').value)
}

// EXO 3 Lorsqu on clique sur le bouton on affiche dans la div le contenue du champs texte
function mafonction() {
    document.getElementById('madiv').innerHTML = document.getElementById('montexte').value
}

// EXO 4 on affiche dans la div le contenue du "Le texte contient : " champs texte
function mafonction() {
    document.getElementById('madiv').innerHTML = "Le texte contient : " + document.getElementById('montexte').value
}

// 5  on affiche dans la div le contenue du "Le prix est  : " champs texte La TVA est champs texte*1.2
document.getElementById('montexte').value = "Entrer le prix en €"
document.getElementById('monbouton').value = "VALIDER"

function mafonction() {
    document.getElementById('madiv').innerHTML = "Le prix est : " + document.getElementById('montexte').value + "€ HT. " + "Le prix avec la TVA est : " + document.getElementById('montexte').value * 1.2 + "€ TTC"
}

/**
 * EXO 6
 * ECRIRE une fonction qui affiche dans la div ce qu il y a dans le champs texte .
 * Cette fonction se declenche au moment ou vous tapez du texte dans le champs texte
 */
document.getElementById('montexte').addEventListener("input", write)
document.getElementById('montexte').value = "";
function write() {
    document.getElementById('madiv').innerHTML = document.getElementById('montexte').value
}

/**
 * EXO 7
 * CREEZ une fonction qui affiche dans la div un numéro qui s'incrémente de 1 à chaque fois que l'on appuie sur le bouton
 */

// document.getElementById('monbouton').addEventListener("click", increm)
// function increm() {
//     cpt=parseInt(document.getElementById('madiv2').innerHTML)+1
//     document.getElementById('madiv2').innerHTML = cpt
// }

// cpt=0;
// document.getElementById('monbouton').addEventListener("click", increm)
// function increm() {
//     document.getElementById('madiv2').innerHTML = cpt++
// }
/**
 * EXO 8
 * CREEZ une fonction qui affiche dans la div un numéro qui se multiplie par 2 à chaque fois que l'on appuie sur le bouton
 */
document.getElementById('monbouton').addEventListener("click", mafonction3)
function mafonction3() {
    compteur=parseInt(document.getElementById("madiv2").innerHTML);
    compteur=(compteur*2);
    document.getElementById("madiv2").innerHTML=compteur;
}

/**
 * EXO 9
 * CREEZ une fonction qui affiche dans la div si l'âge est > ou < à 18 en écrivant majeur ou mineur
 */
document.getElementById('montexte2').value = "Entrer votre âge"
document.getElementById('mineur').addEventListener("click", age)
function age() {
    if (parseInt(document.getElementById('montexte2').value) > 18) {
        document.getElementById('madiv3').innerHTML = "Vous êtes majeur"
    }
    if (parseInt(document.getElementById('montexte2').value) < 18) {
        document.getElementById('madiv3').innerHTML = "Vous êtes mineur"
    } 
    if (parseInt(document.getElementById('montexte2').value) == 18) {
        document.getElementById('madiv3').innerHTML = "Vous êtes pile majeur"
    }
}

/** EXO 10 
 * Creez un champ texte, un bouton et une div
 * dans le champ texte, si on insère un nombre
 * lorsqu'on clique
 * dans la div on a la table de multiplication correspondante
*/
document.getElementById('enternb').value = "Entrer un nombre de 1 à 9"

document.getElementById('multipl').addEventListener("click", multiplication)
function multiplication() {
    nombre = parseInt(document.getElementById('enternb').value)
    document.getElementById('madiv4').innerHTML = "Table de : " + nombre
    var b;
    for(b=0; b<11; b++) {
        document.getElementById('madiv5').innerHTML=(nombre +"*"+ b + "=" + b*nombre)
        console.info(nombre +"*"+ b + "=" + b*nombre);

    }
}

