//Sum of Nth Number

// let n = 5;
// let sum = 0;
// function SumofNthNumber(x) {
//   if (x > n) return;
//   sum = sum + x;
//   console.log(sum);
//   x = x + 1;
//   SumofNthNumber(x);
// }
// SumofNthNumber(1);

// achive = 1+2+3+4+5 =sum
// also we can write 5+4+3+2+1 =sum.
// sum 5 we say sum 4 will calculate sum 4 we say calulte sum 3 it will say sum2 calulate then sum1 calculate then sum0 then return 0.

// To find sum(5) → ask sum(4)

// sum(4) asks sum(3)
// sum(3) asks sum(2)
// sum(2) asks sum(1)
// sum(1) asks sum(0)
// sum(0) returns 0 (stop)

// SumofNthNumber(5)
// ↓
// SumofNthNumber(4)
// ↓
// SumofNthNumber(3)
// ↓
// SumofNthNumber(2)
// ↓
// SumofNthNumber(1)
// ↓
// SumofNthNumber(0)  → stops and retrun 0

// SumofNthNumber(0) = 0
// SumofNthNumber(1) = 1 + 0 = 1
// SumofNthNumber(2) = 2 + 1 = 3
// SumofNthNumber(3) = 3 + 3 = 6
// SumofNthNumber(4) = 4 + 6 = 10
// SumofNthNumber(5) = 5 + 10 = 15

function SumofNthNumber(number) {
  if (number == 0) return 0;
  return number + SumofNthNumber(number - 1);
}

console.log(SumofNthNumber(5));
