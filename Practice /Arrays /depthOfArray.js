/**
* Find the depth of an Array
*/

function getArrayDepth(ry){
  // number of levels: how deep is the array
  let levels = 1;
  // previous length
  let prev_length = 1;
  // current length
  let curr_length = ry.length;
  //if the resulting array is longer than the previous one  add a new level
  while(curr_length > prev_length){
  ry = ry.flat();
  prev_length = curr_length
  curr_length = ry.length;
  levels ++
  }
  return levels;
}



getArrayDepth([1,2,[3,4,[5,6],7,[8,[9,91]],10],11,12]);


const arr = [[1,2],[3,[4,[5]]]];
 
const flattened = arr.flat(Infinity);
console.log(flattened);


var arr1 = [1, 2, 3, [1, 2, 3, 4, [2, 3, 4]]];

function flattenDeep(arr1) {
  return arr1.reduce(
    (acc, val) =>
      Array.isArray(val) ? acc.concat(flattenDeep(val)) : acc.concat(val),
    [],
  );
}

flattenDeep(arr1); // [1, 2, 3, 1, 2, 3, 4, 2, 3, 4]
 
/*
Output: [ 1, 2, 3, 4, 5 ]
*/

 