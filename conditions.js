
// =========== LES CONDITIONS =================

/*** IF  ELSE THEN ... */   
// age = prompt("Veuillez entrer votre âge")
// age = parseInt(age) // on transforme au format numerique
// // Si l'âge > 18, afficher vous êtes majeur
// if (age>18) {
//     console.info("Vous êtes majeur")
// }
// if (age<18) {
//     console.info("Vous êtes mineur")
// }
// if (age==18) {
//     console.info("Vous êtes pile majeur")
// }


/***  EXERCICE 1
 * Demander avec prompt un nombre à l'utilisateur
 * Afficher dans la console se ce nombre est positif ou negatif
 */
// nbre = prompt ("Veuillez entre un nombre");
// nbre = parseInt(nbre);
// if (nbre < 0  && typeof(nbre) === 'number' ) {
//     console.info("Ce nombre est négatif")
// }
// if ((nbre > 0 || nbre == 0) && typeof(nbre) === 'number') {
//     console.info("Ce nombre est positif")
// }
// else {
//     console.info("Ceci n'est pas un nombre")
// }  

/***  EXERCICE 2
 * Demander avec prompt un nombre à l'utilisateur
 * Afficher dans la console se ce nombre est pair ou impair
 */
//  nbre = prompt ("Veuillez entre un nombre");
//  nbre = parseInt(nbre);
//  if (nbre % 2 == 0) {
//      console.info("Ce nombre est pair")
//  }
//  else {
//      console.info("Ce nombre est impair")
//  } 
 
/** EXERCICE 3
 * Initialiser une variable avec votre prenom
 * prenom=diambere
 * vous demandez à l'utilisateur son prenom
 * si le prenom == à votre prenom alors on ecrit dans la console
 * sympa vous avez le même prenom que moi
 * si non rien ...
 * 
 */
myname = 'diambere';
yourname = prompt('Quel est votre prénom ?');
if (myname == yourname) {
    console.info('Sympa, vous avez le même prénom que moi.')
}
else {}
