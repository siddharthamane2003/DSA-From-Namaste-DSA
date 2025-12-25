// for and while loop

// Initization , condtion , increment/decrement In Below  i=i+1
// i=0 to i<5

// i=0 
// i=1
// i=2
// i=3
// i=4

// so i not equal to 5 stop the program stop

// i=0 i<=4
// i=0
// i=1
// i=2
// i=3
// i=4


// i=3 i<5 i++
// o/p=?

// i=3 
// i=4

// i not eqault to 5 then stop

// i=2 i<9 i=i+2
// o/p=?

// i=2
// i=4
// i=6
// i=8

// i not eqault to 10


// i=5 i>0 i=i-1
// i=5
// i=4
// i=3
// i=2
// i=1
// i not 0 stop
// Reverse Loop


// i=5 i<4 i++ 

// loop not work beause i intize to 5


// i=1 i>0 i++

// Infincte Loop i Alwyas Greter Than 1.



for (let i = 1; i < 5; i++) {
    console.log("Heloo World!")
}


function greet() {
    console.log("Nmaste" + 1);
}


for (let i = 0; i < i.length; i++) {
    greet(i)
}


// The indexing start from 0 to the length array.

let arr = [1, 2, 3, 4, 5, 6];
console.log(arr[0]);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// Even Number  
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
        console.log(arr[i])
    }
}

// While Loop
let i = 0; // Intiztion

while (i < 5) { // Condtion
    // This Body if loop
    console.log("Hello World!")


    i++; // Incrament / Dercarement 
}



let string = "Vrushabh Hulle";


// array indexing strat from the 0 that why length -1
for (let i = string.length - 1; i >= 0; i--) {
    console.log(string[i]);
}


for (let i = 10; i >= 0; i--) {
    console.log(i);
}

