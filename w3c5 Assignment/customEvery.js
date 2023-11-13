const array = [2, 4, 6, 8, 9];
function customEvery(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const cback = !callback(array[i], i, array);
    if (cback) {
      return false;
    }
  }
  return true;
}
const answer = customEvery(array, (number) => number % 2 === 0);

console.log(answer);
