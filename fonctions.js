/* ========= LES FONCTIONS ===============
* 
*   elle effectue une action sur un élément
*  ex : parseInt transforme un littéral en nombre */

// function mafonction() {
//     console.info('Je teste ma première fonction !')
// }
// // appel
// mafonction();

// EXO 1 : Créer une fonction qui affiche une alert HELLO WORLD
// function helloworld() {
//     alert('Hello world')
// }
// helloworld();

/* EXO 2 : 
1. Recuperer l'age de l'utilisateur via la commande prompt
2. Affichez l'age de l'utilisateur dans la console
3. Affiche quel age aura l'utilisateur dans 2 ans dans la console
Si 25 est inséré dans la console il sera écrit
L'utilisateur aura 27 ans dans 2 ans
*/
// function myage() {
//     let age = prompt("Quel est votre âge ?");
//     console.info("Vous avez " + age + " ans.");
//     agefutur = (parseInt(age) + 2);
//     console.info("Dans 2 ans, vous aurez " + agefutur + " ans.");
// }
// myage();

// -------- FONCTIONS AVEC PARAMETRES --------
// description
function afficher(prenom) {
    console.info('Bonjour ' + prenom);
}
// appel
afficher('Diambéré');
afficher('Foity');

/* EXO 3 : 
* ecrire une fonction avec un paramètre numérique puis afficher ce nombre en ajoutant 2
*/
function plustwo(nbre){
    console.info('Si on ajoute 2, on obtient : ' + (nbre + 2))
}
plustwo(7);

/* EXO 3 : 
* ecrire une fonction avec un paramètre numérique puis afficher ce nombre est positif ou négatif
*/

function signe(nbre){
    if (nbre < 0 ) {
    console.info("Ce nombre est négatif")
}
if ((nbre > 0 || nbre == 0)) {
    console.info("Ce nombre est positif")
}
}
signe(7);

/* EXO 3 : 
* ecrire une fonction avec un paramètre numérique puis afficher ce nombre est pair ou impair
*/
function parite(nbre){
     if (nbre % 2 == 0) {
     console.info("Ce nombre est pair")
 }
 else {
     console.info("Ce nombre est impair")
 } 
}
parite(7);