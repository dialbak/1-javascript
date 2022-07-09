
function flattenArr(arr) {
    let uniqueArr = []

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            uniqueArr.push(arr[i][j])
        }
    }
    return uniqueArr;

}

const shuffleArr = [
    ["AlgoMasters", "FrontPage Freebirds "],
    ["Runtime Terror", "Static Startup"],
    ["WeC#", "Hypertext Assassins"],
    ["AlgoMasters", "WeC#"],
    ["Static Startup", "Hypertext Assassins"],
    ["Runtime Terror", "FrontPage Freebirds"],
    ["AlgoMasters", "Runtime Terror"],
    ["Hypertext Assassins", "FrontPage Freebirds"],
    ["Static Startup", "WeC#"],
    ["AlgoMasters", "Static Startup"],
    ["FrontPage Freebirds", "WeC#"],
    ["Hypertext Assassins", "Runtime Terror"],
    ["AlgoMasters", "Hypertext Assassins"],
    ["WeC#", "Runtime Terror"],
    ["FrontPage Freebirds", "Static Startup"]
]

console.log(flattenArr(shuffleArr))
