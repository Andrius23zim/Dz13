const array = [1, 2, 3, 4, 5, 6, 7];

function removeElement(arr, removeNumber) {
  const indexOfNumber = arr.indexOf(removeNumber);
  array.splice(indexOfNumber, 1);
}

removeElement(array, 5);

console.log(array);