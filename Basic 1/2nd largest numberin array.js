// find the 2nd largets number in array.

// let arr = [10, 20, 30, 2, -10, 200];
// function MaxNumber(arr) {
//     let max = arr[0];
//     let array = []
//     for (let index = 0; index < arr.length; index++) {
//         if (arr[index] > max) {
//             max = arr[index]
//         }
//     }
//     return max;
// }

// MaxNumber(arr);


// function SecondLargest() {
//     let array = [];
//     let SecondMax = MaxNumber(arr);

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== SecondMax) {
//             array.push(arr[i])
//         }
//     }

//     console.log(MaxNumber(array))
// }

// SecondLargest()


// arr = [4,9,0,2,8,7,1]

// 1. We have to save old Largest Value SecondLargest Value.
// SecondLargest Value. FisrstLarsetg
// Then LargestVlaue=arr[i]

// 2. Condtion Upo both Largestg and Seocond Largest Accsorig to Value.

// LargestVlaues Then Immediatly Upadte SecondLargest.
// If One value if not gretr than Largest but SecondLargest is Greter then Upoadte SecondLargest Vlaues.



// FirstLarget = -Infinity
// SecodLargest= -Infinity
//  if (arr[i] > firstLargest) {
//             SecondLargest = firstLargest; // old values of firstLargest
//             firstLargest = arr[i]; // firstLargest
//         }
//         else if (arr[i] > SecondLargest) { //  One value if not gretr than Largest but SecondLargest is Greter then Upoadte SecondLargest Vlaues. 
//             SecondLargest = arr[i];
//         }
// 1.  SecondLargest = -Infinity
// firstLargest = 4
// 2. firstLargest >9
// SecondLargest=4
// firstLargest=9
// 3. firstLargest>0 Not Run
// 4. firstLargest >8  not run but 
//  SecondLargest > 8 
// SecondLargest =8
// 5. firstLargest>7
// firstLargest=9
// SecondLargest=8
// firstLargest>1
// firstLargest=9
// SecondLargest=8
// retunr 8 as o/p.


// Edage Csea :Empty , Elmetsm , Dupcate Hanle Theese In Your code.


let arr = [1, 10, -3, 100];

function SecondLargest(arr) {
    let firstLargest = -Infinity;
    let SecondLargest = -Infinity;
    if (arr.length < 2) {  // Array Contiosn At Lesat 2 Element
        return "null"
    }
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > firstLargest) {
            SecondLargest = firstLargest;
            firstLargest = arr[i];
        }
        else if (arr[i] > SecondLargest && arr[i] !== firstLargest) {   // [1, 10,100 ,-3, 100,100,20] avoid Dupcate  arr[i] !== firstLargest
            SecondLargest = arr[i];
        }
    }
    return SecondLargest;
}

console.log(SecondLargest(arr))