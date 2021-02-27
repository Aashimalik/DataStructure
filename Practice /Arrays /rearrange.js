/**
 Move all negative numbers to beginning and positive to end with constant extra space

 Input: [-1, 2, -3, 4, 5, 6, -7, 8, 9]
 Outpu: [-1, -3, -7, 4, 5, 6, 2, 8, 9]
*/
// Method 1 
let reArrangeArray = (arr) => {
  let j = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i]) < 0) {
      if( i !== j){
        swap(arr[i], arr[j]);
        j++;
      }
    }
  }
}

reArrangeArray([-1, 2, -3, 4, 5, 6, -7, 8, 9])


// Method 2 (Quick sort)
let reArrangeArray2 = (arr, start = 0, end) => {
  if(start >= end) return
  let pivot = arr[end];
  let insertionIndex = start;
  for(let i = start; i < end; i++){
    if(arr[i] < pivot) {
      swap(arr, i, insertionIndex);
       insertionIndex++;
    }
  }


  swap(arr, insertionIndex, end);
  reArrangeArray2(arr, start, insertionIndex - 1);
  reArrangeArray2(arr, insertionIndex + 1, end );
  return arr;
}

function swap (arr, i, j) {
  if( i === j ) return
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

reArrangeArray2([-1, 2, -3, 4, 5, 6, -7, 8, 9], 0, 8)
