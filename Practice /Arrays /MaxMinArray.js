/**
Find Maximum and minimum of an array.

Examples : 

Input = [1000, 11, 445, 1, 330, 3000]
Output = Minimum element is 1, Maximum element is 3000

*/

function minMax(input) {
  let min, max;
  // if there is only one element in the array
  if(input.length === 1) {
    min = input[0];
    max = input[0];

    return { min, max };
  }

  // Initialize min and max variable accordingly
  if(input[0] > input[1]) {
    min = input[1];
    max = input[0];
  }else {
    min = input[0];
    max = input[1];
  }

  for(let i = 2; i < input.length; i++) {
    if(input[i] > max) max = input[i];
    else if(input[i] < min) min = input[i];
  }

  return { min, max };
}

minMax([1000, 11, 445, 1, 330, 3000]);


/** METHOD 2 (Tournament Method) + Recursive */

function minMaxTournament(input, start,  end) {
  let min, max, mml, mmr, mid;
  
  // if there is only one element
  if(start === end) {
    min = input[start];
    max = input[start];

    return { min, max }
  }

  // if there are only two elements  
  if(end === start + 1) {
    if(input[start] > input[end]) {
      min = input[end];
      max = input[start];
    }else {
      min = input[start];
      max = input[end];
    }

    return { min, max }
  }

  mid = Math.floor((start+end)/2);
  mml = minMaxTournament(input, start, mid);
  mmr = minMaxTournament(input, mid + 1, end);

  // Compare minimums of two parts
  if(mml.min < mmr.min) min = mml.min;
  else min = mmr.min;

  // Compare maimum of two parts
  if (mml.max > mmr.max) max = mml.max;
  else max = mmr.max; 

  return { min, max };

}

minMaxTournament([1000, 11, 445, 1, 330, 3000], 0, 5);