const object4 = {
    a: function () {
        console.log(this)
    }
}

class Player {
    constructor(name, type) {
        console.log("player ", this)
        this.name = name
        this.type = type
    }

    introduce() {
        console.log(`Hi i am ${this.name}, I'm a  ${this.type}`)
    }
}

class Wizard extends Player {
    constructor(name, type) {
        super(name, type);
    }

    play() {
        console.log(`WEEEE I'm a ${this.type}`)
    }
}

const wizard = new Wizard("Shelly", "Healer")
wizard.introduce()
wizard.play()
