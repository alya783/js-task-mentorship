function randomInteger(min, max) {
    let rand = min + Math.random() * (max + 1 - min);
    return Math.floor(rand);
}

const first = randomInteger(1, 15);
const second = randomInteger(1, 15);

//console.log(first);
//console.log(second);

console.log(first > second ? true : false);