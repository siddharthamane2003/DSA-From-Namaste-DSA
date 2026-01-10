// Sum of all number in array

// sumofarray(0) = 10 + sumofarray(1)
// sumofarray(1) = 20 + sumofarray(2)
// sumofarray(2) = 30 + sumofarray(3)
// sumofarray(3) = 401 + sumofarray(4)
// sumofarray(4) = 2 + sumofarray(5)
// sumofarray(5) = 43 + sumofarray(6)
// sumofarray(6) = 0 (base case)

// sumofarray(5) = 43 + 0 = 43
// sumofarray(4) = 2 + 43 = 45
// sumofarray(3) = 401 + 45 = 446
// sumofarray(2) = 30 + 446 = 476
// sumofarray(1) = 20 + 476 = 496
// sumofarray(0) = 10 + 496 = 506

// let array = [10, 20, 30, 401, 2, 43];
// let N = array.length;

// function sumofarray(x) {
//   if (x == N) return 0;
//   return array[x] + sumofarray(x + 1);
// }

// console.log(sumofarray(0));

// Sum of all Odd  number in array

let array = [10, 20, 30, 1, 2, 4];
let N = array.length;

function sumofoddnum(N) {
  let isodd = array[N] % 2 !== 0;

  if (N == 0) {
    if (isodd) {
      return array[N];
    } else {
      return 0;
    }
  }

  if (isodd) {
    return array[N] + sumofoddnum(N - 1);
  } else {
    return 0 + sumofoddnum(N - 1);
  }
}

console.log(sumofoddnum(N - 1));
