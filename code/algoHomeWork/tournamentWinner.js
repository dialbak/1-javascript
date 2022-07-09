
function tournamentWinner(competitions, results) {
    let winnerArr = []
    let mf = 1;
    let m = 0;
    let item;

    for (let i = 0; i < results.length; i++) {

        if (competitions.length === 1 && results[i] === 1) {
            item = competitions[i][i]
        }

        if (competitions.length === 1 && results[i] === 0) {
            item = competitions[i][1]
        }

        if (results[i] === 0) {
            winnerArr[i] = (competitions[i][1])
        }

        if (results[i] === 1) {
            winnerArr[i] = (competitions[i][0])
        }
    }

    for (let i = 0; i < winnerArr.length; i++) {

        for (let j = i; j < winnerArr.length; j++) {

            if (winnerArr[i] === winnerArr[j]) m++;
            if (mf < m) {
                mf = m;
                item = winnerArr[i];
            }
        }
        m = 0;
    }
    return item
}

let competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
]
let results = [0, 0, 1]

console.log(tournamentWinner(competitions, results))
