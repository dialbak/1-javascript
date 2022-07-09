const obj = {
    name: "Billy",
    sing() {

        // Scope de obj
        console.log("a", this);

        const anotherFunc = function () {
            // anotherFunc à son propre scope qui est Object [global]
            console.log("b", this)
        };
        anotherFunc();

        const anotherFunc_2 = () => {
            // Une fonction fléché n'a pas de this
            console.log("c", this)
        };
        anotherFunc_2();
    }
}
obj.sing();
