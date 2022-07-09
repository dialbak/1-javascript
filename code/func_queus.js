function createQueue() {
    const queue = []
    return {
        insertNewElem(item) {
            return queue.unshift(item)
        },

        removeLastElem() {
            return queue.pop()
        },

        getLastElem() {
            return queue[queue.length - 1]
        },

        get length() {
            return queue.length
        },

        isEmpty() {
            return queue.length === 0
        }
    }
}

const q = createQueue()
console.log(q.isEmpty()) // true
q.insertNewElem("a")
q.insertNewElem("b")
q.insertNewElem("c")
q.insertNewElem("d")
q.insertNewElem("e")

// [e,d,c,b,a]
console.log(q.length) // 5
q.removeLastElem()
console.log(q.length) // 4
console.log(q.getLastElem()) // b
console.log(q.isEmpty()) // false





