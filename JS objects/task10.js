let myObject = {
    value1: 1,
    value2: 2,
    boolValue: false,
    value3: 3,
    stringValue: 'any string',
}
  
// call of function
function deleteNonNumbers(obj){
  for(key in obj){
    if(typeof(obj[key]) !== 'number'){
    	delete obj[key];
    }
  }
}
 
console.log(deleteNonNumbers(myObject));

console.log(myObject);

/* result
  let myObject = {
    value1: 1,
    value2: 2,
    value3: 3,
}"*/
