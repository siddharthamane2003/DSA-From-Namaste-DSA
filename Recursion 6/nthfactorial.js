// Nth Factorail Usinf Recursion



// DRY RUN

// Call → nthfact(5)
// Since 5 != 0, return 5 * nthfact(4)
// Call → nthfact(4)
// Return 4 * nthfact(3)
// Call → nthfact(3)
// Return 3 * nthfact(2)
// Call → nthfact(2)
// Return 2 * nthfact(1)
// Call → nthfact(1)
// Return 1 * nthfact(0)
// Call → nthfact(0)
// Condition true → return 1

// Return Unwinding

// nthfact(1) = 1 * 1 = 1
// nthfact(2) = 2 * 1 = 2
// nthfact(3) = 3 * 2 = 6
// nthfact(4) = 4 * 6 = 24
// nthfact(5) = 5 * 24 = 120


function nthfact(N) {
    if(N==0) return 1;

    return N*nthfact(N-1);
}

console.log(nthfact(5))