const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function quickSort(array) {
  if (array.length === 0) {
    return [];
  } else {
    const pivotValue = array[array.length -1];
    // Sort elements into three piles
    let lesser = [];
    let equal = [];
    let greater = [];
    for (let e of array) {
      if (e < pivotValue) {
        lesser.push(e);
      } else if (e > pivotValue) {
        greater.push(e);
      } else {
        equal.push(e);
      }
    }
    return [...quickSort(lesser), ...equal, ...quickSort(greater)];
  }
}

const sorted = quickSort(numbers)
console.log(sorted);