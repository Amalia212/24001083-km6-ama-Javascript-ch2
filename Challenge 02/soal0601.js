// Function to generate an array of numbers in a specified range
function array_range(start, len) {
  // Create a new array with the specified length
  var arr = new Array(len);

  // Iterate through the array, filling it with values incremented from 'start'
  for (var i = 0; i < len; i++, start++) {
    arr[i] = start;
  }

  // Return the generated array
  return arr;
}

// Output the result of generating an array with a starting value of 1 and a length of 4
console.log(array_range(1, 4));

// Output the result of generating an array with a starting value of -6 and a length of 4
console.log(array_range(-6, 4));
