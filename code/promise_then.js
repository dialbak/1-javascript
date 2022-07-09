/**
 * Promise states
 * Pending - Fulfilled - Rejected
 * @type {(function(*=, *=): Promise)|{Headers?: Headers, FetchError?, Request?: Request, Response?: Response, readonly default?: function(*=, *=): Promise}}
 */
const fetch = require("node-fetch")
const API_URL = "https://starwars.egghead.training/"
const endPoint = "films"
const isItLoading = "======= Is it loading ==========:"
let isLoading = true

/**
 * films =  []
 * @param films
 * @returns {*}
 */
function getFilmsTitle(films) {
    return films
        .sort((a, b) => a.episode_id - b.episode_id)
        .map(film => `${film.episode_id}. ${film.title}`)
        .join("\n")
}

console.log(` ${isItLoading} ${isLoading}`)

fetch(API_URL + endPoint)
    .then(response => {
            if (!response.ok) {
                return Promise.reject(
                    new Error("Unsuccessful response")
                )
            }
            return response.json()
                .then(films => {
                    console.log(getFilmsTitle(films))
                    return films
                }
            )
        }
    )
    .catch(error => {
            console.warn(error)
            return []
        }
    )
    .finally(() => {
        isLoading = false
        console.log(` ${isItLoading}  ${isLoading}`)
    })
    .then(films => {
        console.log(` Films array length ${films.length}`)
    })

//fetch(API_URL).then(r => console.log("fetch is ok"))
