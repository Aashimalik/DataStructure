let counter = 0;
function inception () {
  if(counter > 3) {
    return "Done!";
  }
  counter++;
  return inception();
}

inception();

// 1. Identify the base case
// 2. Identify the recursive case
// 3.Get closer and closer and return when needed. Usually we have two returns.