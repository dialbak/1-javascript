/**
 * Run function each 1000s
 * @param year
 * @param breed
 * @constructor
 */
function Dog(year, breed){
    this.age = year
    this.breed = breed
    setInterval(()=>{
        this.age +=1
        console.log(this.age)
    }, 1000)
}
const spike = new Dog(14, "Golden Retriever")
console.log(spike.age)
