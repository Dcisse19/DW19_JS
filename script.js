
/* Commentaire :
Nous allons apprendre 
1. Les variables
2. Les conditions
3. Les boucles
4. Les fonctions */

// Les variables

a=10  // 10 rentre dans la variable A
b=50
c="80" 
b=90 // B contient 90 car dernière valeur entrée
console.error(a);
console.error(a+b);
console.error(typeof(a));   //number
console.error(typeof(c));   //string
console.error(a+c);   // affiche "1080" dans la console (concaténation)
console.error(a+parseInt(c));   //transforme C en nombre et addition


// EXO : LES VARIABLES

SEL = 90;
SUCRE = 60;
console.error("Nous avons du sel en Q. de " + SEL + "g. Nous avons du sucre en quantité de " + SUCRE + "g.")

// Le code inverse les variables
temp = SEL;  //variable temporaire pour stocker la quantité initiale de sel (temp = 90)
SEL = SUCRE;  // SEL prend la valeur de sucre ( SEL = 60)
SUCRE = temp;  //SUCRE prend la valeur de la variable temporaire (SUCRE = 90)

console.error("Nous avons du sel en Qu. de " + SEL + "g. Nous avons du sucre en Qu. de " + SUCRE + "g.")


/* EX0 2 :
1.Récupérer l'âge de l'utilisateur
2. Afficher l'âge de l'utilisateur dans la console
3. Afficher quel âge aura l'utilisateur dans 2 ans. */

// age = 0;
// let age = prompt("Quel est votre âge ?");
// console.info("Vous avez " + age + " ans.");

// agefutur = (parseInt(age) + 2);
// console.info("Dans 2 ans, vous aurez " + agefutur + " ans.");

/* EXO 3 :
1. Demander le prix d'un article via prompt
2. Afficher dans la console : "l'article vaut 45€"
3. Afficher dans la console : "l'article vaut 50€ TTC (prix * 1,2) */

// let prix = prompt("Quel est le prix de cet article HT ?");
// console.info("L'article vaut " + prix + " € HT.");

// prixttc = (parseInt(prix) * 1.2);
// console.info("L'article vaut " + prixttc + " € TTC.");


/* EXO 4 
Afficher dans la console : aujourd'hui nous sommes le date */

d = new Date();
let jour = d.getDate();
let month = d.getMonth();
mois = month + 1;
let année = d.getFullYear();

// let date = new Date(year, month, day);
console.info("Aujourd'hui, nous sommes le : " + jour + "/0" + mois + "/" +  année + ".");