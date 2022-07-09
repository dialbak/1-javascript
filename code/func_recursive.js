/**
 * La particularité d'une fonction recursive c'est qu'elle s'invoquera elle même
 * jusqu'a ce qu'une condition soit remplie
 *
 * Disons que n = 5
 * return n < 2 ? 1 ==> si n est inferieur a 2 ça va retourner 1 et vu q'uil y a return ça arrête le script
 *  n  ==> c 'est le paramètre de la fonction je le multiplie par
 * * f(n - 1) } ==> je remprend la même fonction, je verifie que n < 2 je retourne 1 sinon je fais n-1
 *
 * 5*4*3*2*1
 */
const factorial = f = n => n < 2 ? 1 : (
    console.log("f", f, "n", n),
    n * f(n - 1)
)

const factorial2 = function (){
    console.log("toto")
}
factorial2()


/*** 5*4 20 */
console.log(factorial(5))

const newRecursive = recursive = n => n < 2 ? 1 : (
    console.log(n),
    n * recursive(n - 1)
)


console.log(newRecursive(5))

