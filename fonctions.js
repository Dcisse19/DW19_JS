/* ========= LES FONCTIONS ===============
* 
*   elle effectue une action sur un élément
*  ex : parseInt transforme un littéral en nombre */

function mafonction() {
    console.info('Je teste ma première fonction !')
}
// appel
mafonction();

// EXO 1 : Créer une fonction qui affiche une alert HELLO WORLD
function helloworld() {
    alert('Hello world')
}
helloworld();

/* EXO 2 : 
1. Recuperer l'age de l'utilisateur via la commande prompt
2. Affichez l'age de l'utilisateur dans la console
3. Affiche quel age aura l'utilisateur dans 2 ans dans la console
Si 25 est inséré dans la console il sera écrit
L'utilisateur aura 27 ans dans 2 ans
*/
function myage() {
    let age = prompt("Quel est votre âge ?");
    console.info("Vous avez " + age + " ans.");
    agefutur = (parseInt(age) + 2);
    console.info("Dans 2 ans, vous aurez " + agefutur + " ans.");
}
myage();