// ========= LES BOUCLES =================

// Boucle for qui initialise un compteur que l'on a nommé i qui démarre à 0 et termine à 5
// for (i=0; i<5; i++) {     // i++ = i+1
//     alert('test')  // affiche une alerte i fois  
// }

/**
 * *EXO 1 : Afficher les nombres de 1 à 100 dans la console
 */
// for(i=0; i<101; i++) {
//     console.info(i)
// }   

/**
 * *EXO 2 : Afficher les nombres de 100 à 200 dans la console
 */
// for(a=100; a<201; a++) {
//     console.info(a)
// } 


/**
 * *EXO 3 : Afficher la table de multiplication de 2 dans la console
 */
// for(b=0; b<11; b++) {
//     console.info("2*"+ b + "=" + b*2)
// } 


// ====== DOUBLE BOUCLE =========
// Les nombres de 1 à 9
// Les nombres de 1 à 9 faire une action
// ----- Boucle 1 ----
// for(i=0; i<11; i++) {
//     console.info('boucle 1 : ' + i)
//     for(j=0; j<3; j++) {
//         console.info('je rentre dans la boucle 2 : ' + j)
//     } 
// } 
/**
 * *EXO 4 : Afficher toutes les table de multiplication dans la console
 */
// for(i=1; i<10; i++) {
//     console.info("table de " + i + " :")
//     for(j=0; j<11; j++) {
//         console.info(i+" * "+ j + " = " + j*i)
//     } 
// } 
/**
* *EXO 4 : Afficher toutes les table des additions dans la console
*/
// for(i=1; i<11; i++) {
//    console.info("TABLE DE " + i + " :")
//    for(j=0; j<11; j++) {
//     k = j+i   
//     console.info(i+" + "+ j + " = " + k)   // ou (j+i)
//    } 
// } 

/**
**EXO 5 : Afficher le caractère "*" dans la console 100*
*/
for(l=0; l<100; l++) {
    console.info("*");
}

/**
**EXO 6 : Afficher un carré d'etoiles de 5 dans la console 
*/
for(m=1; m<6; m++) {
    console.info(m + " *****");
}