var nameVar = 'Hiren';
var nameVar = 'Mike'; //not Good
console.log('nameVar',nameVar);

let nameLet = 'JAn';
nameLet = 'jj';
//let nameLet = 'kk'; // Doesn't work, Good
console.log('letVar',nameLet);

const nameConst = 'Frank';
//const nameConst = 'Joe'; // Doesn't work
//nameConst = 'Mon'; // Doesn't Work either // Bery Good :P
console.log('nameConst',nameConst);

function getPetName() {
    const petName = 'Hal';
    return petName;
}

const petName = getPetName(); //Blocked level scopped

console.log(petName);

// Block scopping

var fullName = 'Hiren Patel';

if (fullName) {
    var firstname = fullName.split(' ')[0];
    console.log(firstname);
}

console.log(firstname); // var is function scoped //Where const and let are blocked scoped. 

