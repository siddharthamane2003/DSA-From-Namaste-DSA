// Serch Element in array retunr elemeet if the ele is not present retunr -1

function print(arr, ele) {
    for (let index = 0; index < arr.length; index++) {
        if (arr[index] == ele) {
            return index
        }
    }
    return -1;
}

let arr = [10, 20, 30, 40, 50];
let ele = 20;

console.log(print(arr, ele));


/// Negative number find and return count og it
let array = [200, -2, 3, -5, 10, -20, 100];

function NegativeNumber(array) {
    let count = 0;
    for (let ind = 0; ind < array.length; ind++) {
        if (array[ind] < 0) {
            count++;
        }
    }
    return count;
}

console.log(NegativeNumber(array));



// Finf the Largest Number in Array
// function LargeNumberArray(array) {
//     let max = array[0];
//     for (let index = 0; index < array.length; index++) {
//         if (max < array[index]) max = array[index];
//     }
//     return max;
// }
// console.log(LargeNumberArray(array));



// Better Solution
function LargeNumberArray(array) {
    let max = -1;
    for (let index = 0; index < array.length; index++) {
        if (max < array[index]) max = array[index];
    }
    return max;
}
console.log(LargeNumberArray(array));


// Samallest Number In array

function SmallestNumber(array) {
    let max = -1;
    for (let index = 0; index < array.length; index++) {
        if (max > array[index]) max = array[index];
    }
    return max;
}
console.log(SmallestNumber(array));