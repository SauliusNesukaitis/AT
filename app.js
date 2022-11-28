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