function deepCompare(arr1, arr2){
	return JSON.stringify(arr1.flat(Infinity)) === JSON.stringify(arr2.flat(Infinity));
}

let a1 = [0, 1, 2, [3, 4]];
let a2 = [0, [1, 2], [[3, 4]]];

console.log(deepCompare(a1, a2));