console.log('destructuring');

const person = {
   // name: 'Hiren',
    age: 27,
    location: {
        city: 'JC',
        temp: 75
    }
};

//const name = person.name;
//const age = person.age;
const { name = 'Anonymous', age } = person; //Object destructuring

console.log(`${name} is ${age}`);

const {city, temp: temprature} = person.location; // renaming

// if(person.location.city && person.location.temp) {
//     console.log(`Its ${person.location.temp} in ${person.location.city}`);
// }


// if(city && temp) {
//     console.log(`Its ${temp} in ${city}`);
// }

if(city && temprature) {
    console.log(`Its ${temprature} in ${city}`);
}

//array destructuring

const address = ['15 Columbus Ave', 'JC', 'NJ', '07007'];

const [, city_, state = 'New York' ,zip] = address;
console.log(`You are in ${address[1]} , ${address[2]}`);
console.log(`You are in ${city_} , ${state}`);