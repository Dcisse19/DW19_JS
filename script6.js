/* =========== Les différents types de variables ===========
* const x = 3 : on ne peut pas modifier cette valeur de x
* let y = 2 : portée de variable, y n'existe que dans le bloc {} (elle vie puis elle meurt)
a = "test3"
function test() {
    let a = "test"
}
console.log(a)
* var z = 4 : opposé de let
*/

/* EXO 1 :
* Creez une fonction qui aura deux paramètres qui va calculer la moyenne de 2 nombres
* MOY(12,14) */
// function moyenne_2(nb1, nb2) {
//     let moy = (nb1 + nb2) / 2;
//     console.info(moy);
// }
// moyenne_2(12, 14);

/* Creez une fonction qui aura 3 paramètres qui va calculer la moyenne de 3 nombres */
// function moyenne_3(nb1, nb2, nb3) {
//     let moy = (nb1 + nb2 + nb3) / 3;
//     console.info(moy);
// }
// moyenne_3(12, 14, 15);

/* Creez une fonction qui aura 4 paramètres qui va calculer la moyenne de 4 nombres */
// function moyenne_4(nb1, nb2, nb3, nb4) {
//     let moy = (nb1 + nb2 + nb3 + nb4) / 4;
//     console.info(moy);
// }
// moyenne_4(2, 4, 6, 8);

// function moyenne_5(nb1, nb2, nb3, nb4, nb5) {
//     let moy = (nb1 + nb2 + nb3 + nb4 + nb5) / 5;
//     return moy;  //ici la fonction ne fait rien, elle retourne l'info
// }
// let moy5 = moyenne_5(2, 4, 6, 8, 10);
// console.info(moy5)


//   ============== LES TABLEAUX ==============
// -------Calcul de moyenne -------------
let tab = [3, 5, 3, 27, 7, 54];
console.info(tab[2]) //affiche le chiffre qui correspond à lindice 2
console.info(tab);

function moyindef(tab) {
    let moy = 0;
    for (i = 0; i < tab.length; i++) {   //tab.length = taille du tableau
        moy = moy + tab[i]
    }
    moy = moy / tab.length
    return moy
}
console.info(moyindef([12, 13, 5, 8, 7]))

/*  EXO 2 :
 * 1 CREEZ UNE FONCTION PRENANT EN PARAMETRE UN TABLEAU
 * QUI VA RETOURNER LE MEME TABLEAU
 * Afficher le tableau */
let tab2 = [1, 2, 3, 4, 5, 6, 7];

function mytabl(tabl) {
    return tabl;
}
console.table(mytabl(tab2));
/* EXO 3:

 * 2 FAIRE PAREIL QUE LA 1 EN ECHANGEANT LES DEUX PREMIERES VALEUR DU TABLEAU
 * ET VOUS RENVOYER LE NOUVEAU TABLEAU
 * ET VOUS L AFFICHER */
function mytabl_2(tabl) {
    tmp = tabl[0]
    tabl[0] = tabl[1]
    tabl[1] = tmp
    return tabl;
}
console.table(mytabl_2(tab2));