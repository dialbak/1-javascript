//explicit binding
const anotherContext = {
    name: "Brittney 2",
}

const person3 = {
    age: 50,
    name: "Brittney",

    bindToTheCurrentContext: function () {
        console.log("hi " + this.name);
    },

    bindToAnotherContext: function () {
        console.log("hi " + this.name);
    }.bind(anotherContext)
}


person3.bindToTheCurrentContext()
person3.bindToAnotherContext()
