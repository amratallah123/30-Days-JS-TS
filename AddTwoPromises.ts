type P = Promise<number>;

async function addTwoPromises(promise1: P, promise2: P): P {
  var Sum = 0;
  return await Promise.all([promise1, promise2]).then((s) => {
    Sum += s[0];
    Sum += s[1];
    return Sum;
  });
}

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */
