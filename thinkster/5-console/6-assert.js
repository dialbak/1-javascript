//const bestPizza = "bbq chicken";
const bestPizza = "bbq chicken";
const worstPizza = "anchovies";

console.assert(
    bestPizza == worstPizza,
    worstPizza,
    "is not as good as ",
    bestPizza
);

console.assert(bestPizza == worstPizza, {
    bestPizza,
    worstPizza,
    errorMessage: `${worstPizza} is not as good as ${bestPizza}`
});