var a = 1;

const four = () => {
    if (true) {
        var a = 4;
    }
    console.log("inside function", a)
}
four()
console.log("outside function", a)
let outsideScope3;
const scope3 = (print) => {
    let outsideIf
    if (print) {
        let insideIf = "12"
        outsideIf = "12"
        outsideScope3 = "12"
    }

    try {
        console.log("insideIf " + insideIf)
    } catch (ReferenceError)  {
        console.log(ReferenceError.toString());
    }
    console.log("outsideIf " + outsideIf)
    console.log("outsideScope3 " + outsideScope3)
}

scope3(true);
