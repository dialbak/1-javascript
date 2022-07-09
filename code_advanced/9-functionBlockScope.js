// Function Scope
function loop() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log(" 1 final", i);
}

// Block Scope
function loop2() {
    for (let i = 0; i < 5; i++) {
        // can access i here
    }

    try {
        console.log(" 2 final", i);

    } catch (e) {
        console.log(" 3 returns an error here, is est limité au scope de la boucle {}")
    }
}

loop();
loop2();
