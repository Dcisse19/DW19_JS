function entierAleatoire(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Utilisation
//La variable contient un nombre aléatoire compris entre 1 et 10
var entier = entierAleatoire(5, 15);
console.log(entier)
/**
 * RECUPERER LA FONCTION
 * ET AFFICHER DANS LA LOG UN NOMBRE ENTRE 1 ET 10 .. ENTRE 1 ET 100 .. ENTRE 5 ET 15
 * 
 * EXO 1
 * CREER UNE FONCTION QUI VA RENVOYER UN NOMBRE ENTRE 1 et un parametre de la fonction
 * 
 * 
 * EXO 2
 * CREER UNE FONCTION QUI VA RENVOYER UN TABLEAU IL VA CONTENIR 10 NOMBRE A L INTERIEUR . IL SERONT ALEATOIRE ENTRE 1 ET 100
 * 
 * EXO 3
 * CREER UNE FONCTION QUI VA RENVOYER UN TABLEAU IL VA CONTENIR ENTRE 1 ET 100 NOMBRE A L INTERIEUR  . IL SERONT ALEATOIRE ENTRE 1 ET 100
 * 
 */

// EXO 1 
function aleatoire_2(n) {
    return entierAleatoire(1, n);
}

console.log(aleatoire_2(5000));

// EXO 2
function tablAleatoire() {
    let tableau = [];
    for (let i = 0; i < 10; i++) {
        tableau[i] = entierAleatoire(1, 100);
    }
    return tableau;
}
console.table(tablAleatoire())

// EXO 3
// function tablAleatoire_2() {
//     let tableau = [];
//     m = Math.floor(Math.random() * (100 - 1 + 1)) + 1;    // m = nombre maximum d'éléments du tableau, aléatoire
//     for (let i = 0; i < m; i++) {
//         tableau[i] = Math.floor(Math.random() * (100 - 1 + 1)) + 1;
//     }
//     return tableau;
// }
// console.table(tablAleatoire_2())   

// EXO 3.2
function tablAleatoire_3() {
    let tableau = new Array();
    m = entierAleatoire(1, 100);
    for (let i = 0; i < m; i++) {
        tableau[i] = entierAleatoire(1, 100);
    }
    return tableau;
}
console.table(tablAleatoire_3())

/**
 * 1 .Vous avez deja fait une Fonction qui generer des nombre aleatoire dans un tableau 
 * EXO 1 Creer une fonction qui va utiliser la fonction deja creer precedemement en 1. vous aller renvoyer le nombre max du tableau
 * EXO 2 reer une fonction qui va utiliser la fonction deja creer precedemement en 1. On va imaginer qu on a des âges. La fonction renvoie
 * le nombre de personne majeur > 18 ANS
 * 
*/

// EXO 1:

function nbmax() {
    let tab = tablAleatoire();
    let max = tabl_exo3(tab);
    return max;
}
console.info(nbmax());

// EXO 1.2:

function nbmax() {
    return tabl_exo3(tablAleatoire())
}
console.info(nbmax());

// EXO 2:

// function nbmajeur() {
//     let tabl = tablAleatoire()
//     let tableausup18 = new Array ();

//     cpt = 0
//     for (let i = 0; i < tabl.length; i++) {
//         if (tabl[i] > 18) {
//             cpt = cpt + 1
//             tableausup18[cpt] = tabl[i]
//         }
//     }
//     return cpt, tableausup18
// }
// console.table(nbmajeur());

/* EXO 3. Creer une fonction qui va utiliser la fonction deja creer precedemement en 1.  On va imaginer qu on a des prix HT. La fonction renvoyé 
 * le tableau avec les même prix en TTC : prix * 1.2
*/

function prixttc(){
    let tabl1 = tablAleatoire();
    console.table(tabl1);
    let tabl1_ttc = new Array();
    for (let i = 0; i < tabl1.length; i++) {
    tabl1_ttc[i]= tabl1[i]*1.2;
    }
    return tabl1_ttc;
}
console.table(prixttc());
