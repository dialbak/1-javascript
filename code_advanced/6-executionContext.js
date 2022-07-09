/*
  * Function Execution Context creates arguments object
  * Les arguments des mots-clés peuvent être dangereux à utiliser dans votre code tels quel. Dans ES6, quelques
  * méthodes ont été introduites qui peuvent aider à utiliser des arguments.
 */
function showArgs(arg1, arg2) {
    console.log('1-arguments-variable: ', arguments);
    return `1-b-argument 1 is: ${arg1} and argument 2 is: ${arg2}`;
}

console.log(showArgs("hello", "world"))


function noArgs() {
    console.log("2-même s'il n'y a pas d'arguments, l'objet est toujours créé : ", arguments);
}

noArgs();

