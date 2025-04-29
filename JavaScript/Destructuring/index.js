// ? Object Destructuring

// ! Normal Way 

// const person = {
//     name : "Nagarjun",
//     age : 28
// }

// console.log(person.name);
// console.log(person.age);


// ! Destructure way

// const {name, age }= person;

// console.log(name);
// console.log(age);


// ? Array Destructuring

const numbers = [10, 20, 30];

// const [a,b,c]=numbers;

// console.log(a);
// console.log(b);
// console.log(c);

// ! Skip Numbers

const [first, , third] = numbers;

console.log(first);
console.log(third);

// ! Swap Two numbers

let x = 1;
let y = 2;

[x, y] = [y, x]

console.log(x);
console.log(y);


// ? Function Parameter Destructuring

function greet({ name, city }) {
    console.log(`Hello ${name} from ${city}`);

}

const user = {
    name: "Nagarjun",
    city: "Nanded"
}

greet(user);

// ? Default values in Destructuring

const person = {
    name: "Nagarjun",
}

// const {name, age = 25}= person;
// console.log(`Hello ${name}, ${age}`);


// ? Nested Destructuring

const user1 = {
    name1: "Nagarjun",
    address: {
        city: "Nanded",
        pin: 431605
    }
};

const {
    name1, address: {
        city, pin
    }
} = user1;

console.log(name1);
console.log(city);
console.log(pin);

