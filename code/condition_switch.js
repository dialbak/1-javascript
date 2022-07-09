let arr = []

/**
 * Check if parameter type is number
 * @param value
 * @returns {boolean}
 */
const validatorValue = (value) => {
    return typeof value == "number" && value > 0;
}

/**
 * Check the spelling
 * @param label1
 * @param label2
 */
const validatorLabel = (label1, label2) => {
    switch (label1) {
        case "second":
            arr[1] = label1
            break;
        case "seconds":
            arr[1] = label1
            break;
        case "minute":
            arr[1] = label1
            break;
        case "minutes":
            arr[1] = label1
            break;
        case "hour":
            arr[1] = label1
            break;
        case "hours":
            arr[1] = label1
            break;
        case "day":
            arr[1] = label1
            break;
        case "days":
            arr[1] = label1
            break;
        default:
            console.log(`Invalid format for this input :  ${label1}`)
    }
    switch (label2) {
        case "second":
            arr[3] = label2
            break;
        case "seconds":
            arr[3] = label2
            break;
        case "minute":
            arr[3] = label2
            break;
        case "minutes":
            arr[3] = label2
            break;
        case "hour":
            arr[3] = label2
            break;
        case "hours":
            arr[3] = label2
            break;
        case "day":
            arr[3] = label2
            break;
        case "days":
            arr[3] = label2
            break;
        default:
            console.log(`Invalid format for this input :  ${label2}`)
    }
}

/**
 * If parameters are good spelling and format
 * push their value in thze array
 * @param value1
 * @param label1
 * @param value2
 * @param label2
 */
const timeAdder = (value1, label1, value2, label2) => {
    if (validatorValue(value1) && validatorValue(value2)) {
        arr[0] = value1
        arr[2] = (value2)
    } else {
        console.log("error value1 and value2 must be a positif number ")
    }
    validatorLabel(label1, label2)

    /**
     * Extra credit
     * if user send for exemple 49 hours
     * change array value to 2 days
     */
    if (value1 > 24 && label1 === "hours") {
        arr[0] = Math.trunc(value1 / 24);
        if (arr[0] > 1) {
            arr[1] = "days"
        } else {
            arr[1] = "day"
        }
        validatorLabel(arr[1], label2)
    } else {
        if (validatorValue(value1) && validatorValue(value2)) {
            arr[0] = value1
            arr[2] = (value2)
        } else {
            console.log("error value1 and value2 must be a positif number ")
        }
        validatorLabel(label1, label2)
    }
}


timeAdder(173, "hours", 4, "hour")
console.log(arr)