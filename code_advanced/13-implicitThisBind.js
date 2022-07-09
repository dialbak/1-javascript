const person = {
    name: "person",
    age: 20,
    hi() {
        console.log("hi ", this);
    }
};

person.hi();
// this = person { name: 'person', age: 20, hi(){...} }
