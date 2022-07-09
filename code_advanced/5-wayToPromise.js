const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay))

const a = () => promisify("a", 100);
const b = () => promisify("b", 5000);
const c = () => promisify("c", 3000);

// all together
async function parallel() {
    const promises = [a(), b(), c()]
    const [output1, output2, output3] = await Promise.all(promises)
    return `parallel is done (all together): ${output1} ${output2} ${output3}`;
}

// 1 after another
async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `sequence is done (one after another): ${output1} ${output2} ${output3}`;
}

async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `race is done (doesn't matter who win): ${output1}`;
}

sequence().then(console.log);
parallel().then(console.log);
race().then(console.log);

