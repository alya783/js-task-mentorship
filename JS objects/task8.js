const human = {
    firstName: "",
    lastName: ""
}

const person = Object.create(human);

person.firstName = "Monica"
person.lastName = "Lavatto"

Object.defineProperty(person, 'fullName', {
    get: function() { 
            return [Array(this.firstName), Array(this.lastName)]; 
        },
    set: function(newFullName) {
  			let arr = newFullName.split(' ');
  			this.firstName = arr[0]; 
            this.lastName = arr[1]; 
        },
});

console.log(person.fullName = "Lizza Zalcman");
console.log(person.fullName);

