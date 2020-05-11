console.log('--- Exercise 1 ---\n');

function range(start, end) {
	array = [];
	for (let i=start; i <= end; i++) {
		array.push(i);
	};

	return array;
}

console.log(range(1,10));

function sum(array) {
	sum = 0;
	for (const number of array) {
		sum += number;
	};
	
	return sum;
}

console.log(sum(range(1,10)));

console.log('\n--- Exercise 2---\n');

function reverseArray(array) {
	reversed = [];
	for (let i=array.length-1; i >= 0; i--) {
		reversed.push(array[i]);
	};

	return reversed;
}

console.log(reverseArray(["A", "B", "C"]));

function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
