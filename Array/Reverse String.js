// Revsrse A String.

// In place => without carteing extar space / array modify input array.
// str = ["H","E","L","L","O"]
// Loop Condition

// while (low < height)
// after the midddle swapping is over the low will greter than heiht and for these low < height condition.
// → swap only until pointers cross
// → prevents re-swapping the middle element

// Step	low	height	Condition (low < height)	Action	Array
// Init	0	4	0 < 4 → true	—	H E L L O
// 1	0	4	true	swap(0,4)	O E L L H
// 2	1	3	1 < 3 → true	swap(1,3)	O L L E H
// End	2	2	2 < 2 → false	stop	O L L E H
// low =3 height =2 then reswaping for these condtion heigth> low

// Why low < height?
// Ensures swapping happens only once per pair
// Stops at the middle element
// ["O","L","L","E","H"]



function ReersveString(str) {
    let low = 0;
    let height = str.length - 1;

    while (low < height) {
        let temp = str[low];
        str[low] = str[height];
        str[height] = temp;
        low++;
        height--;
    }

    return str;
}


let str = ["H", "E", "L", "L", "O"];
//console.log(ReersveString(str));

//Assume str = ['H','E','L','L','O']
// length = 5, loop runs till Math.floor(5/2) = 2

// Iteration 1 (i = 0):

// swap str[0] ↔ str[4] → O E L L H

// Iteration 2 (i = 1):

// swap str[1] ↔ str[3] → O L L E H

// Loop stops → middle element doesn’t need swap.
// Output: ['O','L','L','E','H']

// Logic : we have to only swap the 3 charter in above string.
// 1.
// swap(0,4)
// swap(1,3)
// alrdy swaped.

//  Tech Fomrate.
// n=length
// swap(i,n-i-1)
// swap(0 , n-i-1=5-0-1=4)
// swap(1, n-i-1=5-1-1=3)
// alrdey swapped.

// 2.  we have to swap the charater only the half leght according to the above expression.

function RevsrseString(str) {
  for (let i = 0; i < Math.floor(str.length / 2); i++) {
    let temp = str[i];
    str[i] = str[str.length - i - 1];
    str[str.length - i - 1] = temp;
  }
  return str;
}
console.log(RevsrseString(str));