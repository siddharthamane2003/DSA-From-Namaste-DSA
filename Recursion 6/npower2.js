// N is  Power of  2 Or Not.

// If we divide the n/2 then last number will be 1 return true.
// if odd number or number is less than 1 then these is not power of 2 retrun false


// 5=5/2=3 , 3=3/2=1.5 = 1.5/2=0.75 false odd number
// 23456 -> divide divide then it will 0 less than 1

// Call → powerof2(16)
// 16 /2 =8 → return powerof2(8)
// Call → powerof2(8)
// 8 /2 =4 → return powerof2(4)
// Call → powerof2(4)
// 4 /2  =2 → return powerof2(2)
// Call → powerof2(2)
// 2 /2 =1 → return powerof2(1)
// Call → powerof2(1)
// Condition N == 1 → return true


// DRY RUN

// Call → powerof2(23456)
// 23456 is even → return powerof2(11728)
// Call → powerof2(11728)
// 11728 is even → return powerof2(5864)
// Call → powerof2(5864)
// 5864 is even → return powerof2(2932)
// Call → powerof2(2932)
// 2932 is even → return powerof2(1466)
// Call → powerof2(1466)
// 1466 is even → return powerof2(733)
// Call → powerof2(733)
// 733 % 2 !== 0 → odd, return false

// Return Unwinding
// powerof2(733) → false
// powerof2(1466) → false
// powerof2(2932) → false
// powerof2(5864) → false
// powerof2(11728) → false
// powerof2(23456) → false


function powerof2(N) {
    if(N==1) return true;
    else if (N<1 || N%2!==0) return false;

    return powerof2(N/2);
}

console.log(powerof2(23456))//false less than 0
console.log(powerof2(16))//true
console.log(powerof2(5))// true odd num