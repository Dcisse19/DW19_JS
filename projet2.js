
/* ECRIRE :
1. CE QUE VOUS ALLEZ CODEZ EN FRANCAIS
2. LE CODE
 */

let tableau = ['Axel', 'Sacha', 'Diambere', 'Yoel', 'Foity', 'Catherine', 'Patrick', 'Fatou', 'Paul'];
let tableau2 = ['chat', 'loup', 'chien','chat', 'poisson', 'vache', 'giraffe','chat', 'tortue', 'chien','lapin', 'lion'];

console.table(tableau);
/**
 * EX 1 . CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU
 * QUI RENVOIE VRAI OU FAUX
 * VRAI SI IL TROUVE VOTRE PRENOM
 * FAUX SI IL NE LE TROUVE PAS
 */
/* EXO 1 :
En français :
 1 - je parcoure le tableau (boucle)
 2 - je compare chaque élément du tableau à mon prénom 
*/
function find_myname(tabl) {
    for (let i = 0; i < tabl.length; i++) {
        mavar = tabl[i]
        if (mavar == 'Diambere') {
            return true
        }
    } return false
}
console.info(find_myname(tableau));



/*  EX0 2 . CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU ET UNE CHAINE DE CARACTERE
* QUI RENVOIE VRAI OU FAUX
* VRAI SI IL TROUVE LA CHAINE DE CARACTERE DANS LE TABLEAU
* FAUX SI IL NE LE TROUVE PAS
*/
function find_word(tabl, word) {
    for (let i = 0; i < tabl.length; i++) {  //parcourt le tableau
        if (tabl[i] == word) {  //compare à la chaine de characteres
            return true  // s'il trouve la chaine de characteres, il s'arrête et retourne vrai
        }
    } return false // sinon il continue et retourne faux
}
console.info(find_word(tableau2, "serpent"));

/*  EX 3 . CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU ET UNE CHAINE DE CARACTERE
* QUI RENVOIE LA PREMIERE POSITION / LA CLE / L INDICE DE L EMPLACEMENT DANS LE TABLEAU CORRESPONDANT
* A LA CHAINE DE CARACTERE TROUVE. SI IL LA TROUVE PAS LA FONCTION RENVOIE 0
*/ 

function find_position(tabl, word) {
    for (let i = 0; i < tabl.length; i++) {  //parcourt le tableau
        if (tabl[i] == word) {  //compare à la chaine de characteres
            return "L'indice associé à l'élément " + word + " est : " + i  // s'il trouve la chaine de characteres, il s'arrête et retourne l'indice
        }
    } return 0 // sinon il continue et retourne 0
}
console.info(find_position(tableau2, "poisson"));

/*  * EX 4 . CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU ET UNE CHAINE DE CARACTERE
 * QUI RENVOIE LA LE NOMBRE DE FOIS OU IL RETROUVE CETTE CHAINE DE CARACTERE
*/

function find_occurence(tabl, word) {
    let n = 0
    for (let i = 0; i < tabl.length; i++) {  //parcourt le tableau
        if (tabl[i] == word) {  //compare à la chaine de characteres
            n = n + 1 // s'il trouve la chaine de characteres, il ajoute 1 au nombre de fois qu'il l'a trouvé
        }
    }  return "L'élément " + word + " a été trouvé " + n + " fois dans le tableau."  
}
console.info(find_occurence(tableau2, "chat"));

/* BONUS :  CREER UNE FONCTION AVEC UN PARAMETRE PRENANT UN TABLEAU ET UNE CHAINE DE CARACTERE
* QUI RENVOIE UN TABLEAU CONTENANT L ENSEMBLE DES ELEMENTS DU TABLEAU SANS LES ELEMENTS CORRESPONDANT
* A VOTRE CHAINE DE CARACTERE
*/

function find_delete(tabl, word) {
    console.table(tabl);
    let tabl_corrige = []
    for (let i = 0; i < tabl.length; i++) {  //parcourt le tableau
        if (tabl[i] != word) {  //compare à la chaine de characteres
            tabl_corrige[i] = tabl[i]// s'il ne trouve pas la chaîne de charactères, il met l'élément dans le tableau
        }
    }  return tabl_corrige
}
console.table(find_delete(tableau2, "chat"));

