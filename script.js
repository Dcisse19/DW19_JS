
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
age = prompt("Quel est votre âge ?");
console.error("Vous avez " + age + " ans.");

agefutur = (parseInt(age) + 2);
console.error("Dans 2 ans, vous aurez " + agefutur + " ans.");

// console.error(AGE);