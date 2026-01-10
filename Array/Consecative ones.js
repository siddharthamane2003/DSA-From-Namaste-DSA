// Find Maximum MaxConsecutive Ones

//  Count consecutive 1s using currentCount
// On 0, update maxCount as compare between two current and maxcount which will be large thne maxcount and reset current count=0
// At end, return max of both why beasuce of the [1,1,0,1,1,1] currentcount=3 maxcount=2 at last no zero it will retun the maxcountas 2 so for
//compare between two current and maxcount

// [1,1,0,1,1,1]

// | i | nums[i] | current | max |
// | - | ------- | ------- | --- |
// if 1 the  current++
// | 0 | 1       | 1       | 0   |
// | 1 | 1       | 2       | 0   |
// if 0 then compare between two current and maxcount which will be large thne maxcount and reset current count=0
// | 2 | 0       | 0       | 2   |
// | 3 | 1       | 1       | 2   |
// | 4 | 1       | 2       | 2   |
// | 5 | 1       | 3       | 2   |
// currentcount=3 maxcount=2 at last no zero it will retun the maxcountas 2 so for
// compare between two current and maxcount

var findMaxConsecutiveOnes = function (nums) {
  let currentCount = 0;
  let maxCount = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      currentCount++;
    } else {
      maxCount = Math.max(maxCount, currentCount);
      currentCount = 0;
    }
  }

  return Math.max(currentCount, maxCount);
};
