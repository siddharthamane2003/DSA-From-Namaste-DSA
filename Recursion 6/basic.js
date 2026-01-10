// Recursion -> Fn call by intself called recursion.
// Base condtion -> End of Function.

// Function call itself till the base condion
// in below -> 10 then call fun 10-1=9 check condion 10<1 false then print 8 call fn
// like tha 7 6 5 4 3 2 1 0 f num <1 true end of fn retrun the fn
// 10 to 1

function recursion(num) {
  if (num < 1) {
    // base conditon
    return; // stop the program
  }

  console.log(num); // recusion case
  num = num - 1;
  recursion(num); // function call itself
}

//recursion(10);


// print 1 to num

function numto1(n) {
  if (n == n) return;
}
