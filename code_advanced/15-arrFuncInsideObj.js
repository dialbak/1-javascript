const person4 = {
    name: "person4",
    age: 40,
    hi: function () {
        const inner = () => {
            const local = "inside arrow function"
            console.log("Context du parent : ", this);
            console.log("Arrow function n'a pas de this ", this.local)
        };
        return inner();
    }
}

person4.hi();
