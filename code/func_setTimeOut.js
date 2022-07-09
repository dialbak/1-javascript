function counter() {
    setTimeout(() => {
        console.log("first");
        setTimeout(() => {
            console.log("second");
            setTimeout(() => {
                console.log("third");
                setTimeout(() => {
                    console.log("fourth");
                }, 400)
            }, 600)
        }, 800)
    }, 1000)
}

console.log(counter())