// Identify the type for the following variables

// string
let myVar1 = 'Hello!';

// number
let myVar2 = 2000;

// string
let myVar3 = 1 + '1';

/**
 * false
 *  <pre>
 *      == compare value
 *      === compare value and type
 *  </pre>
 */
let myVar4 = myVar3 === 11;

// undefined
let myVar5;

// null object
let myVar6 = myVar5 === undefined ? null : undefined;

// false
let myVar7 = myVar5 === myVar6;

// Symbol
let myVar8 = Symbol(1);

// symbol
let myVar9 = Symbol(1);

// False
let myVar10 = myVar8 === myVar9;

console.log(
    "typeof myVar1", typeof myVar1, "\n",
    "typeof myVar2", typeof myVar2, "\n",
    "typeof myVar3", typeof myVar3, "\n",
    "typeof myVar4", typeof myVar4, "\n",
    "typeof myVar5", typeof myVar5, "\n",
    "typeof myVar6", typeof myVar6, "\n",
    "typeof myVar7", typeof myVar7, "\n",
    "typeof myVar8", typeof myVar8, "\n",
    "typeof myVar9", typeof myVar9, "\n",
    "typeof myVar10", typeof myVar10,
)
