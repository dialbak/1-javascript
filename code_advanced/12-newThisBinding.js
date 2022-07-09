// new binding
function Person(name, age) {
    this.name = name;
    this.age = age;
    console.log(this);
}

new Person("person1", 55);
// this = Person { name: 'person1', age: 55 }
