// Best time to Buy and sell stocks

// let arr = [7, 1, 5, 3, 6, 4];

// function BuySell(arr) {
//   let res = [];
//   for (let i = 0; i < arr.length; i++) {
//     let sell;
//     let res2 = [];

//     for (let j = i; j < arr.length; j++) {
//       sell = arr[j] - arr[i];

//       res2.push(sell);
//     }

//     let max_value = Math.max(...res2);
//     res.push(max_value);
//   }
//   let value = Math.max(...res);

//   if (value > 0) {
//     return value;
//   } else {
//     return 0;
//   }
// }

// console.log(BuySell(arr));

// We Have to get MaxProfit.
// From which we are getting from the min value.
// Each Current value we have to find their respective maxProfit Value.
// And we have to update max Value.
// also updte the min value.

// arr = [7, 1, 5, 3, 6, 4]
// MaxProfit = 0, MinValue = 7

// i=1: arr[i]=1 → MinValue=7, MaxProfit=0
// i=2: arr[i]=5 → MaxProfit=5-1=4>0 then maxprofit=4
// i=3: arr[i]=3 → MaxProfit=3-1>4 false ,maxprofit=4 minvalue=1
// i=4: arr[i]=6 → MaxProfit=6-1=5>4 maxprofit=5 , minvalue=1
// i=5: arr[i]=4 → MaxProfit=4-1=3>5 false maxprofit=5 , minvalue=1


// Return maxprofit = 5

let arr = [7, 1, 5, 3, 6, 4];

function BuySell(arr) {
  let MaxProfit = 0;
  let MinValue = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - MinValue > MaxProfit) {
      MaxProfit = arr[i] - MinValue;
    }

    if (arr[i] < MinValue) {
      MinValue = arr[i];
    }
  }
  return MaxProfit;
}

console.log(BuySell(arr));