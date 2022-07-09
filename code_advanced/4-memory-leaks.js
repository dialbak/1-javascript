/**
 * Memory leaks (fuite mémoire)
 *
 * Les 3 choses qui causent le plus souvent des fuites mémoire sont les boucles infinies,
 * - setInterval,
 * - les variables globales et
 * - les events listeners,
 * on s'en sert, mais si on ne les supprime pas quand on en a plus besoin, l'espace
 mémoire qui leur est alloué persistent
 */

let person  = {
    firstName: 'Brittney',
    lastName: 'Postma'
}

/**
 * En changeant la variable person  d'un objet à une chaîne de caractère, elle laisse les valeurs du firstName et lastName
 * dans la mémoire et ne la supprime pas. Ce qui crée une fuite de mémoire
 */
person = "Brittney Postma"


