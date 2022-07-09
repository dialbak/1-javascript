
function deleteDuplicateInArray(suffleArr) {
    let flatArr = []
    let cleanArr

    for (let i = 0; i < suffleArr.length; i++) {
        for (let j = 0; j < suffleArr[i].length; j++) {
            flatArr.push(suffleArr[i][j])
        }
    }
    cleanArr = [...new Set(flatArr)]
    return cleanArr;
}

const arr = [
    ["AlgoMasters", "FrontPage Freebirds"],
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

console.log(deleteDuplicateInArray(arr))
