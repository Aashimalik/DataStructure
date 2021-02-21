/**
 
Find the "Kth" max and min element of an array 

Examples : 

Input = [7, 10, 4, 3, 20, 15], K = 3
Output : 7
Explanation : 3rd smallest element in the given array is 7

LeetCode : 215
*/

// Method 1
function smallestElement (input, k) {
  input.sort((a,b) => (a-b));

  return input.sort((a,b) => (a-b))[k-1];
}

smallestElement([12, 3, 5, 7, 4, 19, 26 ], 3);

// Method 2 using Quick Sort
function smallestElement2 ( input, k) {
  return quickSort(input, k)[k-1];
}

let quickSort = (arr) => {
  quickSortHelper(arr, 0, arr.length - 1)

  return arr;
};

function quickSortHelper(arr, start, end) {

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
  quickSortHelper(arr, start, insertionIndex - 1);
  quickSortHelper(arr, insertionIndex + 1, end );
}

function swap (arr, i, j) {
  if( i === j ) return
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}
