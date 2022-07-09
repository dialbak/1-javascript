//Constructor pattern for creating objects
function Donut(type, glazed, sweetness, hasChocolate) {
    this.type = type
    this.glazed = glazed
    this.sweetness = sweetness
    this.hasChocolate = hasChocolate

    this.sayType = () => console.log("Type : " + this.type)
    this.showSweetness =  () => console.log("Sweetness " + sweetness)
    this.returnAll = () => console.log(this)
}

const vanillaDonut = new Donut("vanilla", true, 10, false);
vanillaDonut.sayType()
vanillaDonut.showSweetness()
vanillaDonut.returnAll()