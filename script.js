
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
temp = SEL;
SEL = SUCRE;
SUCRE = temp;

console.error("Nous avons du sel en Q. de " + SEL + "g. Nous avons du sucre en quantité de " + SUCRE + "g.")

