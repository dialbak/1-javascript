const fetch = require("node-fetch")
const API_URL = "https://starwars.egghead.training/"

const queryApi = (endpoint) => {
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

Promise.all([
    queryApi("films"),
    queryApi("planets"),
    queryApi("species")
])
    .then(([films, planets, species]) => {
            console.log(` films : ${films.length}\n planets : ${planets.length}\n species : ${species.length}\n`)
        }
    )
    .catch(error => {
        console.warn(error)
    })
    .finally(() => {
        console.log("end")
    })
