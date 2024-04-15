/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    let newarr = [];
    for (let i = 0; i < arr.length; i++) {
        fn(arr[i], i) ? newarr.push(arr[i]) : "";
    }
    return newarr;
};