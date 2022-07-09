/**
 * Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
 * For Example:
 * const array1 = ['a', 'b', 'c', 'x'];*const array2 = ['z', 'y', 'i'];
 * should return false.
 * -----------
 * const array1 = ['a', 'b', 'c', 'x'];*const array2 = ['z', 'y', 'x'];
 * should return true.

 * 2 parameters - arrays - no size limit
 * return true or false
 */

const array1 = ['a', 'b', 'c', 'x'];
const array2 = ['z', 'y', 'i'];
const array3 = ['z', 'y', 'x'];

/**
 *  je cree une fonction qui prend 2 paramètres de types []
 *  je boucle sur mon tableau 1
 *  Pour chaque item du tableau 1
 *  je boucle sur le tableau 2
 *  Si item tableau 1 == item tableau 2
 *  return true
 *  sinon return false*
 */

const containsCommonItem = (arr1, arr2) => {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                return true
            }
        }
    }
    return false
}

const mapArrToObject = (arr1) => {
    let map = {}

    for (let i = 0; i < arr1.length; i++) {
        if (!map[arr1[i]]) {
            const item = arr1[i];
            map[item] = true
        }
    }

    return map;
}

const containsCommonItem_2 = (arr1, arr2) => {
    let map = mapArrToObject(arr1);

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) return true;
    }

    return false
}

const containsCommonItem_3 = (arr1, arr2) => arr1.some(item => arr2.includes(item))

console.log("1 " + containsCommonItem_2(array1, array3))


