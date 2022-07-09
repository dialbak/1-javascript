const users = [
    {name: "chris", age: 34},
    {name: "Jane", age: 28},
    {name: "Billy", age: 45}
]
const mapUserAge = arrObjs => arrObjs.map(arrObj => arrObj.age)
console.log(mapUserAge(users))