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



