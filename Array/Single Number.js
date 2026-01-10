// Single Number 
// x-or opration
// a ^ a=0
// a^0=a
// if there are duplicate values then xor will do 0 and retrun unique number.

// nums = [4, 1, 2, 1, 2]

//  XOR cancels same numbers → a ^ a = 0 and 0 ^ x = x

// Dry Run
// Step	xor	nums[i]	xor ^ nums[i]
// start	0	–	0
// i=0	0	4	0 ^ 4 = 4
// i=1	4	1	4 ^ 1 = 5
// i=2	5	2	5 ^ 2 = 7
// i=3	7	1	7 ^ 1 = 6
// i=4	6	2	6 ^ 2 = 4

// Final Output
// 4

// Why it works (short)
// 1 ^ 1 = 0
// 2 ^ 2 = 0


var singleNumber = function(nums) {
        let xor=0;
        for (let i=0;i<nums.length;i++){
            xor=xor^nums[i];
        }
        return xor
};