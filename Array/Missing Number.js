// let arr = [3, 0, 1];
// let n = arr.length + 1;

// for (let i = 0; i < n; i++) {
//   let found = false;

//   for (let j = 0; j < arr.length; j++) {
//     if (arr[j] === i) {
//       found = true;
//       break;
//     }
//   }

//   if (!found) {
//     console.log(i);
//     break;
//   }
// }


//  formula One n*n(n+1)/2 it will gives the result 1
//  sum of all vlaues in array gives result 2
//  differnce betwwen two result is missing value

// Example
// nums = [3, 0, 1]

// Step 1: Values
// n = 3

// valu1 = n*(n+1)/2 = 3*4/2 = 6
// valu2 = 0

// Step 2: Loop (sum of array)
// i	nums[i]	valu2
// 0	3	3
// 1	0	3
// 2	1	4
// Step 3: Return
// return valu1 - valu2
// return 6 - 4 = 2

// ✅ Output
// 2


var missingNumber = function(nums) {
    let n=nums.length;
    let valu1=n*(n+1)/2;
    let valu2=0;
    for (let i=0;i<nums.length;i++){
            valu2=valu2+nums[i];
    }

    return valu1-valu2;
   
};




