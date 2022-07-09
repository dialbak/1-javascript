/**
 * Number.EPSILON renvoie le plus petit intervalle entre deux nombres représentables.
 * C'est utile pour le problème de l' approximation en virgule flottante.
 *
 * La différence entre 0,1+0,2 et 0,3 sera inférieure à Number.EPSILON.
 */

const numberEquals = (x, y) => {
    return Math.abs(x - y) < Number.EPSILON;
}

console.log(numberEquals(0.1 + 0.2, 0.3))
