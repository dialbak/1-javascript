/**
 * Si ce findUser(userData) est appelé plusieurs fois,
 * alors il sera optimisé (mise en inline cache) pour simplement être 'found Brittney Postma'
 */

function findUser(user) {
    return `found ${user.firstName} ${user.lastName}`
}

const userData = {
    lastName: 'Postma',
    firstName: 'Brittney'
}

findUser(userData)
