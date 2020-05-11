console.log('--- Exercise 1 ---\n');

function range(start, end) {
	array = [];
	for (let i=start; i <= end; i++) {
		array.push(i);
	};

	return array;
}

function sum(array) {
	sum = 0;
	for (const number of array) {
		sum += number;
	};
	
	return sum;
}

console.log(range(1,10));
console.log(sum(range(1,10)));

console.log('\n--- Exercise 2---\n');

function reverseArray(array) {
	reversed = [];
	for (let i=array.length-1; i >= 0; i--) {
		reversed.push(array[i]);
	}

	return reversed;
}

console.log(reverseArray(["A", "B", "C"]));

