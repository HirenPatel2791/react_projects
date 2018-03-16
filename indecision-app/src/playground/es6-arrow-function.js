const square = function (x) {
    return x * x;
};

const squareArrow = (x) => {
  return  x * x;
};

console.log(square(8));
console.log(squareArrow(8));

//short hand
const getFirstName = (fullName) => fullName.split(' ')[0];   

console.log(getFirstName('Hiren Patel'));


//argument object - no longer bound with arrow functions

const add = function (a, b) {
    console.log(arguments);
    return a + b;
};

const addArrow = (a, b) => {
    //console.log(arguments); //generates error
    return a + b;
};

console.log(add(5, 1));
console.log(addArrow(5, 1));

// this keyword - no longer bound 

const user = {
    name: 'Hiren',
    cities : ['surat','ny'],
    printPlacesLived: function () { // can't be () => {} // can be__ printPlacesLived() { }; 
        console.log(this.name); //accesible
        console.log(this.cities);
        //const that = this; //work around

        // this.cities.forEach(function (city){ //not accesible
        //     console.log(this.name + 'has lived in ' + city);
        // });

        this.cities.forEach((city) => { //not accesible
            console.log(this.name + ' has lived in ' + city);
        });
        
    }
};

const userNew = {
    name: 'hiren',
    cities: ['surat', 'ny'],
    printPlacesLived() {
        return this.cities.map((city) => this.name + ' has lived in ' + city);
    }
};

console.log(user.printPlacesLived());

console.log(userNew.printPlacesLived());

const multiplier = {
    numbers: [1,2,3],
    multiplyBy: 2,
    multiply() {
        return this.numbers.map((num) => num * this.multiplyBy);
    }
}


console.log(multiplier.multiply());