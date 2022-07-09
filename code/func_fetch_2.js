const fetch = require("node-fetch")

/**
 * baseURL :  https://api.github.com
 *
 * endPoint :  /users
 *
 *  cb : getGithubUsers()
 *
 * @param baseURL
 * @returns {function(*): function(*): *}
 */

const getFromAPI = baseURL => endPoint => cb => {
    return fetch(`${baseURL}${endPoint}`)
        .then(res => res.json())
        .then(data => cb(data))
        .catch(err => console.log(err.message))
}

const getGitHub = getFromAPI("https://api.github.com")
const getGithubUsers = getGitHub("/users")
const getGithubRepos = getGitHub("/repositories")

getGithubUsers(data => console.log(data.map(user => user.login)))
getGithubRepos(data => console.log(data.map(repo => repo.id)))