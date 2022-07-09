let API_URL = "https://api.github.com/users/";
const fetch = require("node-fetch")


const queryApi = (githubUser) => {
    return fetch(API_URL + githubUser)
        .then(response => {
            return response.ok ? console.log(response) : (
                Promise.reject(Error("Unsuccessful response")),
                    console.log("Unsuccessful response")
            )
        })
}

queryApi("dialbak")

