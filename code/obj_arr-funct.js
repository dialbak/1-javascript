
const cars = {
    color: {
        red: {key :'Redt'}
    },
    getSummary: () => this.color,

    getSummary2: function () {
       return this
    }
}

console.log("a", cars.getSummary())
console.log("b", cars.getSummary2())
