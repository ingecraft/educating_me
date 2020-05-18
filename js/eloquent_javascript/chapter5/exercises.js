console.log('--- Exercise 1 ---\n');

function flatten(arrays) {
	// my version
//	output = [];
//
//	arrays.reduce(function (a, b) { 
//		for (const element of b) {
//			output.push(element);
//		}
//	}, 0);

//	return output;
	// optimized version
	return arrays.reduce((flat, current) => flat.concat(current), []);
}


console.log('--- Exercise 1 ---\n');

let arrays = [[1, 2, 3], [4, 5], [6]];
// Your code here.
console.log(flatten(arrays));
// → [1, 2, 3, 4, 5, 6]`

console.log('\n--- Exercise 2---\n');

function loop(value, test, update, body) {
  if (test(value)){
    body(value);
    loop(update(value), test, update, body);
  // Official solution
  // for (let value = start; test(value); value = update(value)) {
  //   body(value);
  // } 
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

console.log('\n--- Exercise 2---\n');

function every(array, test) {
  for (let element of array) {
    if (!test(element)) return false;
  }

  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}

console.log(every([1, 3, 5], n => n < 10));
// → true
console.log(every([2, 4, 16], n => n < 10));
// → false
console.log(every([], n => n < 10));
// → true

