const todos = ["manger", "boire", "digerer", "faire du sport", "dormir"]

for(let i = 0;  i < todos.length; i++ ) {
    let task = `task to do is : ${todos[i]}`
    // console.log(task)
}

const notes = ["note 1","note 2","note 3","note 4"]
notes.push("note5", "note 6") // ajoute dans le tableau par la fin
console.log(notes.pop()) // efface le derniers elem
console.log(notes.shift()) // efface le premier elem
notes.unshift("Add on first") // ajoute dasn le tableau apr le début
console.log(notes)
console.log(notes.length)


const myArray = "je ne sais pas ce qui se passe !"
const splitOnArray = myArray.split(" ")
console.log(splitOnArray)

splitOnArray.splice(0, 4) // va supprimer de l'index 0
console.log(splitOnArray)

const newNotes = ["note 1","note 2","note 3","note 4"]
newNotes.splice(1,1, "this is the new second item ")
console.log(newNotes)
newNotes[4] = "does it work"
newNotes[5] = "work like push"
console.log(newNotes)


const todosSecond = ["order cat food", "Clean kitchen", "Buy food", "Do work", "Exercise"]
todosSecond.splice(2,2) // enlève "Buy food"
todosSecond.push("add one to the end")
todosSecond.shift()
console.log(todosSecond)


const family = ["Bakary", "Aurore", "Tidiane", "Kady"]
family.forEach((index,i) => console.log(i + "_Diallo " + index))

