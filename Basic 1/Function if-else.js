// Function

function print(name) {
    console.log("Hello" + " " + name)
}

let x = "Pranav"
print(x)
print("Siddharth")
print("Vrushabh")


function sum(a, b) {
    // return a+b;
    console.log(a + b)
}

let a1 = 100;
let a2 = 200;
sum(a1, a2)

sum(10, 20)

// console.log(sum(10,20))

function mul(value1, value2) {
    let res = value1 * value2;
    return res;
}

let value = mul(10, 20);
console.log(value)



function sqaure(num) {
    let resl = num * num;
    return resl;
}
let store = 10;
sqaure(store)
// console.log(sqaure(20))



// if-else
// Fcuntion to Check Eleigibality to Vote Or not

function Eligibal(age) {
    if (age < 1) return "Invalid Input"

    else if (age < 18) return "Not Eleigibal to vote";

    else return "Eligibal to vote"
}

console.log(Eligibal(10));
console.log(Eligibal(30));
console.log(Eligibal(-1));

// Functin to check num is even or odd.

function EvenOdd(num) {
    if (num < 0) return "Invalid Input"

    else if (num % 2 == 0) return "Number is Even";

    else return "Number is Odd"
}

console.log(EvenOdd(10));
console.log(EvenOdd(234));
console.log(EvenOdd(5));
console.log(EvenOdd(-109));
console.log(EvenOdd(0));