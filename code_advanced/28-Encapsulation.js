const encapsulation = () => {
    let people = [];
    const setName = name => people.push(name);
    const getName = idx => people[idx];
    const rmName = idx => people.splice(idx, 1);
    return {
        setName,
        getName,
        rmName
    };
};
const data = encapsulation();
data.setName("Brittney"); // 0
data.getName(0); // 'Brittney'
data.rmName(0); // ['Brittney']
// you have no access to the array people
// can only change it via methods provided
