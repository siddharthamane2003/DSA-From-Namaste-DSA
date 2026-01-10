// 1. condsion execute when number is !== 0
// we have to use 2 pointer method. x for the shifting.
// 2. we have to shift no-zero elemet to 1st poision.
// [0, 1, 0, 3, 12]  1 , 3  , 12  are shofted in 1st pinsion as [ 1, 3, 12, 3, 12 ] unsing x
// Then 2nd lopp will run the x to n add zero [ 1, 3, 12, 0, 0 ]

// | i | nums[i] | action     | nums          | x |
// | - | ------- | ---------- | ------------- | - |
// | 0 | 0       | skip       | [0,1,0,3,12]  | 0 |
// | 1 | 1       | nums[0]=1  | [1,1,0,3,12]  | 1 |
// | 2 | 0       | skip       | [1,1,0,3,12]  | 1 |
// | 3 | 3       | nums[1]=3  | [1,3,0,3,12]  | 2 |
// | 4 | 12      | nums[2]=12 | [1,3,12,3,12] | 3 |


var moveZeroes = function (nums) {
    if (nums.length === 1) return nums;

    let x = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] !== 0) {
            nums[x] = nums[i];
            x++;
        }
    }

    for (let i=x;i<nums.length;i++){
        nums[i]=0;
    }
};

let nums = [0,1,0,3,12];
console.log(moveZeroes(nums));