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
// -------EXO 1 : Calcul de moyenne -------------
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

/**
 * Fonction qui vont prendre en parametre un tableau qui retourne
 *  EXO 1 : le nombre d'éléments dans un tableau
 *  EXO 2 : la somme des éléments d'un tableau
 *  EXO 3 : 'élément maximum d'un tableau
 *  EXO 4 : l'élément minimum d'un tableau
 *  EXO 5 : Trouver le premier élément supérieur à 500
 *  BONUS : Copier les premiers éléments d'un tableau dont la somme fait au moins 500
 */

let tableau_3 = [12,351,10,92,173,722,4,70,29,126]; 
// EXO 1
function tabl_exo1(tabl){
      return "Il y'a " +  tabl.length + " élements dans ce tableau.";
} 
console.info(tabl_exo1(tableau_3));

// EXO 2
function tabl_exo2(tabl){
    let sum = 0;
    for (let i=0; i<tabl.length; i++) {
    sum = sum + tabl[i];
    }
    return "La somme des éléments vaut " + sum
}
console.info(tabl_exo2(tableau_3));

// EXO 3
function tabl_exo3(tabl){
    let max = 0;
    for (let i=0; i<tabl.length; i++) {
     if(tabl[i] > max){
        max = tabl[i];  
     }
    }
    return "L'élément maximum du tableau est : " + max
}
console.info(tabl_exo3(tableau_3));

// EXO 4
function tabl_exo4(tabl){
    let min = 10000000000;
    for (let i=0; i<tabl.length; i++) {
     if(tabl[i] < min){
        min = tabl[i];  
     }
    }
    return "L'élément minimum du tableau est : " + min
}
console.info(tabl_exo4(tableau_3));

// EXO BONUS

function tabl_exobonus(tabl){
    let somme = 0;
    let tabl_copy=[];
    for (let i=0; i<tabl.length; i++) {
     somme = somme + tabl[i]; 
     tabl_copy[i] = tabl[i];  
     if(somme >= 500){
        return tabl_copy;  
     }
    }
}
console.table(tabl_exobonus(tableau_3));

