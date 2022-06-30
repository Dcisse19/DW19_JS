/**
 * Fonction qui
 * 1 prend en parametre un nombre et qui va renvoyer vrai si il est positif  ou faux si il est negatif
 * 2 prend en parametre un nombre et qui va renvoyer vrai si il est pair  ou faux si il est impair
 * 3 prend en parametre une chaine de caracter et qui va renvoyer vrai si il est = à votre prenom
 * 4 prend en parametre une chaine de caracter et qui va renvoyer vrai si il est = au deuxieme parametre
 */

// FONCTION 1 
function signe(n) {
    if (n > 0) {
        return true
    }
    else {
        return false
    }
}
console.info(signe(8));

// FONCTION 2
function parite(n) {
    if (n % 2 == 0) {
        return true
    }
    else {
        return false
    }
}
console.info(parite(9));

// FONCTION 3
function homonyme(prenom) {
    if (prenom === diambere) {
        return true
    }
    else {
        return false
    }
}
console.info(homonyme('sacha'));

// FONCTION 3.2
function homonyme_2(myname,prenom) {
    if (prenom === myname) {
        return true
    }
    else {
        return false
    }
}
console.info(homonyme_2('diambere','sacha'));

// FONCTION 4
function homonyme(parm1,parm2) {
    if (parm1 === parm2) {
        return true
    }
    else {
        return false
    }
}
console.info(homonyme('loup','loup'));
