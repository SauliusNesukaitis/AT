let a = 'abc';
let b = true;
let c = 1;

console.log(a+b)
console.log(a+c)
console.log(b+c)

console.log(b*c)
console.log(a*c)
console.log(b*c)

console.log(b/c)
console.log(a/c)
console.log(b/c)

let x = Number(a);
let y = String(b);
let z = Boolean(c);

console.log(a)
console.log(b)
console.log(c)


// Objects and functions

// 1
const Car = {
    color: "black"
}

Car.color = "green"
Car.power = 150

console.log(Car)

// 2
let sum = (pears, apples) => {
    return pears + apples
}

console.log(sum(5, 8))

// 3
function displayName(name) {
    if (name === "Saulius") {
        return "Helllo " + name
    } else {
        return "There is no such name"
    }
}

console.log(displayName("Saulius"))

// 4
function typeOfArgument(arg) {
    return typeof(arg)
}

console.log(typeOfArgument(1))

// 5
function isPrime(num) {
    for (let i = 2; i * i <= num; i++)
        if (num % i === 0)
            return false; 
    return num > 1;
}

console.log(isPrime(1))


// Arrays and Cycles

// 1

let movieNames = ["movie1", "movie2", "movie3"];

movieNames.forEach(movie => console.log(movie));

// 2

let carManufacturers = ["car1", "car2", "car3"];

let carString = carManufacturers.toString();

let carArray = carString.split(",");

console.log(carArray);

// 3

let names = ["name1", "name2", "name3"];

let namesHello = names.map(name => "Hello " + name);

console.log(namesHello);

// 4

let numericArray = [0, 1, 0, 0];

let booleanArray = [];

for (let i = 0; i < numericArray.length; i++) {
    booleanArray.push(Boolean(numericArray[i]));
}

console.log(booleanArray);

// 5

let arr = [1,6,7,8,3,4,5,6];

let sortedArray = arr.sort((a, b) => b - a);

console.log(sortedArray);

// 6

let arr1 = [1,6,7,8,3,4,5,6];

let filteredArray = arr1.filter((a) => a > 3);

console.log(filteredArray);

// 7

let arr2 = [1,6,7,8,3,4,5,6];

function indexOfNumber(arr, num) {
    console.log(arr.indexOf(num))
}

indexOfNumber(arr2, 5)

// 8

let i = 18;

while (i > 10) {
    i--
    console.log(i)
}

// 9

for(let number = 1 ; number <= 20; number++){
    let isPrime = true;

    for (let i = 2; i <= number - 1 ;i++){
        if(number % i === 0){
            isPrime = false;
            break;
        }
    }
    if (isPrime) console.log(number);
}

// 10

for(let number = 1 ; number <= 20; number++){
    if (number % 2 === 0){
    console.log(number);
    }
}


// Prototype and Inheritance, Classes, Constructor

// 1

class Animal {
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}

class Cat extends Animal {
    constructor(name) {
        super(name)
    }
}

let cat1 = new Cat("Black cat");

cat1.move();


// String, RegExp, DateTime

// 1

let str = "ahb acb aeb aeeb adcb axeb";

let re = /a.b/gi;

// let re = /abc/gi;

console.log(str.match(re));

// 2

let str1 ='2 + 3 223 2223';

let re1 = /2\s\+\s3/gi;

console.log(str1.match(re1));

// 3


const newDate = new Date();
const year = newDate.getFullYear();
const month = newDate.getMonth() + 1;
const d = newDate.getDate();
  
console.log(year);
console.log(month);
console.log(d);


// Exception handling

// 1

try {
    // let a = 1/0;
    console.log(a);
    let a = 3;
    if (a === 1/0)
        throw Error()
} 
catch (a) {
    if (a instanceof  ReferenceError) {
        console.error("'let must be declared' before use.")
    } else if (a) {
        console.log("cannot be divided by zero")
    }
}
 

