const fakeData = {
    loading: "loading.....",
    resolve: "request success"
}

const checkStatus = (status, time) => {
    setTimeout(() => {
        console.log(`${status}`)
    }, time)
}

const makeARequest = (status) => {
    const {loading, resolve} = fakeData
    status(loading, 1000)
    status(resolve, 3000)
}

makeARequest(checkStatus)
