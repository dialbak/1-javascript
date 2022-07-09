/**
 * Les functions fléchés fonctionnent différemment des functions régulières.
 * La fonction fléché n'a pas de bind à son propre "this", pas arguments, super ou des mots-clés new.target.
 * Ne peut pas être utilisé comme constructeur et ne sont pas le meilleur pour les méthodes.
 */
const obj = {
// does not create a new scope
    i: 10,
    b: () => console.log(this.i, this),
    c: function () {
        console.log(this.i, this);
        obj.b(); // prints undefined, Window {...} (or the global object)
        obj.c(); // prints 10, Object {...}``
    }
}
