const array = [1, 2, 3, 4, 5];
function customReduce(array, callback, initialValue) {
  let accumulator = initialValue !== undefined ? initialValue : array[0];
  const startIndex = initialValue !== undefined ? 0 : 1;

  for (let i = startIndex; i < array.length; i++) {
    accumulator = callback(accumulator, array[i], i, array);
  }

  return accumulator;
}
const sum = customReduce(
  array,
  (accumulator, currentValue) => accumulator + currentValue,
  0
);

console.log(sum);
