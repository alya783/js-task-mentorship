const objSourse = { a: 1, b: 2, c: 'summer'};
const target = Object.assign({}, objSourse);

console.log(objSourse);
console.log(target);

target.c = "winter";
console.log(target);

/* {
  a: 1,
  b: 2,
  c: "winter"
}*/
