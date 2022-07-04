function removeValues(array, list){
	return array.filter(el => !list.includes(el));
}

let a1 = [1,2,3,1,2];
let a2 = [1, 2];

console.log(removeValues(a1, a2));