
// =========== LES CONDITIONS =================

/*** IF  ELSE THEN ... */   
age = prompt("Veuillez entrer votre âge")
age = parseInt(age) // on transforme au format numerique
// Si l'âge > 18, afficher vous êtes majeur
if (age>18) {
    console.info("Vous êtes majeur")
}
if (age<18) {
    console.info("Vous êtes mineur")
}
if (age==18) {
    console.info("Vous êtes pile majeur")
}