function findUnique(array){
	return [...new Set(array)];
}
 
const a1 = [10,14,19,14,10,2,9,10,14,9,18];

console.log(findUnique(a1));
