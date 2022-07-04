function findCommonValues(array1, array2){
    const re = / \s+/g;
    return array1.filter(el => array2.includes(el) && el !== " " && el!== undefined && !String(el).match(re));
}
 
const a1 = ['File Name',' ','File Type',, 'Year','  ','Country','Date Created',5,'Uploaded by','Status','Actions'];
const a2 = [' ','File Type', 'Year','  ',0,'Date Created',5,'Uploaded by',,'Status','Actions'];

console.log(findCommonValues(a1, a2));



// ['File Type', 'Year', 'Date Created', 5, 'Uploaded by', 'Status', 'Actions'];