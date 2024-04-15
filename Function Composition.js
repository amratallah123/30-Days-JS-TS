var compose = function (functions) {
    functions = functions.reverse();
    return function (x) {
        functions.map(f => {
            x = f(x)
        })
        return x;
    }
};


var compose2 = new compose([x => x + 1, x => x * x, x => 2 * x].reverse());
console.log(compose2(4)); 