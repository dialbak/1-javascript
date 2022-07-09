/**
 * - this
 * - Fait reference au contexte de l'objet courant obj{}
 * @type {{method: obj.method, property: string}}
 */
const obj = {
    property: `I'm a property of obj.`,
    method: function () {
        console.log(this.property);
    }
}

obj.method()
