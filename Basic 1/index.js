console.log("Hello World!!")
console.log("Hello Siddharth!!")
console.log("Hello Vrusbh!!")
console.log("Hello Akshay!!")

console.log(true);
console.log(3);

let a = 10;
const b = 20;
var c = 30;

let sum = a + b
console.log(sum);

let mul = a * b;
console.log(mul);

let diff = a - b;
console.log(diff);

let x = 10;
x = 90;
console.log(x);


let firstNmae = "Siddharth";
firstNmae = "Pranav"   // Update Value
// let LastName="Amane";
let LastName = 7; // convert 7 => "7"

console.log(firstNmae + " " + LastName);


// Array

// Number
let arr = [1, 2, 3, 45, 6] // Array Stored in form of Index and Value and Index Start from 0.

// 1 => 0 , 2=> 1 , 3=> 2 so on.

console.log(arr);

console.log(arr[0]);

console.log(arr[0] + arr[2]);


console.log(arr[6]); // undefined Values i not Present

// String

// Diffrent DaTa Type We Can Declare.
// We can also Declare Array inside Araay Nested.

let StringArray = ["Siddharth", 2, "Pranav", true, 20, 4, -3, 1234, [1, 23, 34, [10, 20, 30]]];
console.log(StringArray[8])


// Object Stored in Key and Value Pair.

let obj = {
    a: 9,
    name: "Siddharth",
    b: [1, 2, 3, 54, 5]
}

console.log(obj.a)
console.log(obj.name);

console.log(obj.name + " " + obj.b);