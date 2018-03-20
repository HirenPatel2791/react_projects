class Person {
  constructor(name = 'Anonymous',age = 0) { // defaults
    this.name = name;
    this.age = age;
  }

  getGreeting() {
    //return 'Hi '+ this.name +'!';
    return `HI. I am ${this.name};`
  }

  getDescription() {
    return `${this.name} is ${this.age} year(s) old!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name,age);
    this.major = major;
  }

  hasMajor() {
    return !!this.major;
  }

  getDescription() {
    let description = super.getDescription();
    if(this.hasMajor()) {
      description += ` thier major is ${this.major}`;
    }
    return description;
  }
}



const me = new Student('Andrew Mean',26, 'CS');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
console.log(me.hasMajor());

const other = new Student();
console.log(other);
console.log(other.getGreeting());
console.log(other.getDescription());
console.log(other.hasMajor());
