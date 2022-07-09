/**
 * Never done this,
 * just to show how callback function can work
 */

const numCruncher1 = (num, cb) => cb(num * num)
const numCruncher2 = (num, cb) => cb(num / 100)
const totalSum = (a, b, cb) => cb(a, b)

function crunchNumbers(a, b, cb1, cb2, cb3) {
    cb1(a,
        function (x) {
            console.log("x ", x)

            cb2(b, function (y) {
                console.log("y ", y)

                cb3(x, y, function (result) {
                        console.log("x, y ", x, y)
                        console.log(result);
                    }
                );
            });
        });
}


crunchNumbers(5, 10, numCruncher1, numCruncher2, totalSum);
