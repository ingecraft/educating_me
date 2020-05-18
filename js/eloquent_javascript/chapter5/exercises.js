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
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// → 3
// → 2
// → 1

