const fetch = require("node-fetch")
const API_URL = "https://starwars.egghead.training/"

function queryApi(endpoint) {
    return fetch(API_URL + endpoint)
        .then(response => {
            return response.ok
                ? response.json()
                : (
                    Promise.reject(Error("Unsuccessful response")),
                        console.log("Unsuccessful response")
                )
        })
}

Promise.allSettled([
    queryApi("films").then(f => ` ${f.length} films`),
    queryApi("planets").then(p => ` ${p.length} planets`),
    queryApi("species").then(s => ` ${s.length} species`),
    queryApi("vehicles").then(v => ` ${v.length} vehicles`),
])
    .then(results => {
        const statistics = results
            .filter(result => result.status === "fulfilled")
            .map(result => result.value)
        let output = statistics.length === 0 ? "failed to load stat" : statistics.join()
        console.log(output)
    })
    .catch(error => {
        console.warn(error)
        console.log(":-(")
    })
    .finally(() => console.log("end"))