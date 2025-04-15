// Double the array
const nums = [1, 2, 3, 4, 5];
const double = nums.map(num => {
    return num * 2;
})
console.log(double); // [2, 4, 6, 8, 10]


// Convert all strings to UpperCase

const names = ["Amit", "Neha", "John"];

const uCase = names.map((names) => (
    names.toUpperCase()
))

console.log(uCase)

// Add 10 to each number 

const arr = [10, 20, 30];

const add = arr.map((arr) => {
    return arr + 10;
})

console.log(add);



// Convert Numbers to strings

const numbers = [1, 2, 3];

const str = numbers.map((nums) => {
    return String(nums);
})

console.log(str);

// Get lengths of each string

const fruits = ["apple", "banana", "kiwi"];

const len = fruits.map((len) => {
    return len.length;
})
console.log(len);


//  Prefix Hello to each name

const naams = ["Nagarjun", "Raja"];

const pre = naams.map((pre) => {
    var Prefix = "Hello, " + pre
    return Prefix;
})

console.log(pre);


// Multiply each element with its index

const arr1 = [2, 4, 6];

const mult = arr1.map((mult, index) => {
    return mult * index;
})
console.log(mult);


// Create full names from objects

const people = [
    { first: "Amit", last: "Sharma" },
    { first: "Neha", last: "Singh" }
];

const fName = people.map((user) => {
    return user.first + " " + user.last;
})
console.log(fName);


// Convert boolean array to "Yes"/"No"

const flags = [true, false, true];

const bool = flags.map((bool) => {
    return bool ? "Yes" : "No";
})
console.log(bool);


// Extract ages from object array

const users = [
    { name: "Amit", age: 25 },
    { name: "Neha", age: 30 }
];

const age = users.map((vay) => {
    return vay.age;
})

console.log(age);

// Wrap strings in <li> tags]

const items = ["Pen", "Book"];

const lst = items.map((list) => {
    return `<li>${list}</li>`;
})
console.log(lst);


// Get first letters of each string

const words = ["Hello", "World"];

const FLetter = words.map((fl) => {
    // return fl.slice(0, 1);
    return fl.charAt(0);
})
console.log(FLetter);


// Format prices

const prices = [100, 200];

const paisa = prices.map((pisa) => {
    return `Rs.${pisa}`;
})
console.log(paisa);

