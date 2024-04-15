function createCounter() {

    return {
        increment: function () {
            count++;
            console.log(count);
        },
        decrement: function () {
            count--;
            console.log(count);
        },
        reset: function () {
            count = 0;
            console.log(count);
        }
    };
}
var count = 0;
var closureFunction = new createCounter();

closureFunction.increment()
closureFunction.increment()
closureFunction.increment()
closureFunction.increment()
closureFunction.increment()

