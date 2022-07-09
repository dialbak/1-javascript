
const donut1 = {
    type: "coconut",
    glazed: true,
    sweetness: 8,
    hasChocolate: false,
    sayType: function () {
        console.log("Type : " + this.type)
    },
    showSweetness: function () {
        console.log("Sweetness : " + this.sweetness)
    }
}
donut1.sayType()
donut1.showSweetness()