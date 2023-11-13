const array = [1, 3, 5, 7, 9, 11];
function customMapSome(array, callback) {
  for (let i = 0; i < array.length; i++) {
    const result = callback(array[i]);
    if (result) {
      return true;
    }
  }
  return false;
}
const hasEvenNumber = customMapSome(array, (number) => {
  number == 1;
});

console.log(hasEvenNumber);
