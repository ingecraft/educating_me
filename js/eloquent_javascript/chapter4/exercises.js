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

console.log('\n--- Exercise 3---\n');

function arrayToList(array) {
	list = {};
	for (let i=array.length-1; i >= 0; i--) {
	  if (i == array.length-1) {
			list = {'value': array[i], rest: null};
		} else {
			list = {'value': array[i], rest: list};
		}
	}

	return list;
}

function listToArray(list) {
	let array = [];
	for (let node = list; node; node = node.rest) {
		array.push(node.value);
	}
	return array;
}
	
function prepend(value, list) {
	return {value, 'rest': list};
}

function nth(list, index) {
	if (index == 0) {
		return list.value;
	}
	if (list) {
		index -= 1;
		return nth(list.rest, index);
	} else {
		return undefined;
	}
}

console.log(arrayToList([10, 20]));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(listToArray(arrayToList([10, 20, 30])));
// → [10, 20, 30]
console.log(prepend(10, prepend(20, null)));
// → {value: 10, rest: {value: 20, rest: null}}
console.log(nth(arrayToList([10, 20, 30]), 2));
// → 20
