// 1. sqaure start pattern.

// i loop goes 0 to n-1=3 => 0 , 1 ,2 ,3
// j loop run j=> 0, 1 ,2 ,3 =>

// i=0
// 1. row is empty
// 2. j will goes 0 to 3 =>  0 ,1 ,2 3. and body of loop row vabible "*" is added. so 4 starts
// 3. print **** console and agin runs row empty reset.

// i=1
// 1. row is empty
// 2. j will goes 0 to 3 =>  0 ,1 ,2 3. and body of loop row vabible "*" is added. so 4 starts
// 3. print **** console and agin runs row empty reset.

// so on... till 3

// o/p:
//  ****
//  ****
//  ****
//  ****

let n = 4;

for (let i = 0; i < n; i++) {
  // coloums
  let row = " ";
  for (let j = 0; j < n; j++) {
    // rows
    row += "*";
  }
  console.log(row);
}

// 2. Left Angled Triangle

// Direct Logic : when i=0 then 1 start printed.
// i=1 2 start so on.
// soltion inside j loop will run 0 to j+1.

// i=0 the j=0 to j<i+1 j=0 not pritn * then j=1 prit * like that.
// i=1 the j=0 to j<=i+1 , j=0 , j=1 , j=2  j=1 ,2 prit  start .
// so on.

//  *
//  **
//  ***
//  ****

let num = 4;
for (let i = 0; i < num; i++) {
  let row = " ";
  for (let j = 0; j < i + 1; j++) {
    row += "*";
  }
  console.log(row);
}

// Note : i<3 and i<=2 same.

// Number Left Angled Trinagle
// same logic above jusut print j+1.
// o.p:
//  1
//  12
//  123
//  1234

let number = 4;
for (let i = 0; i < number; i++) {
  let row = " ";
  for (let j = 0; j < i + 1; j++) {
    row += j + 1;
  }
  console.log(row);
}

// op:
//  1
//  22
//  333
//  4444

// We have to print i is constant is column i+1 why buse of above logic.

let ele = 4;
for (let i = 0; i < ele; i++) {
  let row = " ";
  for (let j = 0; j < i + 1; j++) {
    row += i + 1;
  }
  console.log(row);
}

//  1234
//  123
//  12
//  1

// i=0 then loop runs n times means the 4times
// i=1 then loop runs n-1 times means the 3times
// i=2 then loop runs n-2 times means the 2times
// so on..
// j loop n-i
// i=0 j=4-0=4 times as the j+1 => 1 alwsya the j+1
// then 1 ,2 , 3, 4.
// i=1 j=n-i=3times j+1
// 1 ,2 3,
//i=2 thne j=n-i=2 times then j+1
// 1,2 so on.

for (let i = 0; i < ele; i++) {
  let row = " ";
  for (let j = 0; j < n - i; j++) {
    row += j + 1;
  }
  console.log(row);
}

//  ****
//  ***
//  **
//  *
// same above.

for (let i = 0; i < ele; i++) {
  let row = " ";
  for (let j = 0; j < n - i; j++) {
    row += "*";
  }
  console.log(row);
}

//     *
//    **
//   ***
//  ****

// op: 
// 1st we have to print the spacing + star. n=4
// i=0 then 3 spces.  n-i+1 => 4-1 n-0+1 = 3 spcaes.
// i=1 then 2 spaces. n-1+1 =>   2 spaces.
// i=2 then 1 spaces. 1 spaves
// i=3 then 0 spaces. 0 spces

// and then  i=0 the 1 start
// j=1 then 2 star. so on.

// For space is n-i+1 spces and j=i+1 for the *

for (let i = 0; i < ele; i++) {
  let row = " ";
  for (let j = 0; j < ele - (i + 1); j++) {
    row += " ";
  }
  for (let j = 0; j < i + 1; j++) {
    row += "*";
  }

  console.log(row);
}

// 1
// 10
// 101
// 1010

// same as j<i+1
// alstrnate switch 1 => 0 , 0=>1.
// extra varble as swtch =1
// if swtch =1 then 0 else 1
// print the row .

for (let i = 0; i < ele; i++) {
  let row = "";
  let swtch = 1;
  for (let j = 0; j < i + 1; j++) {
    row += swtch;
    if (swtch == 1) {
      swtch = 0;
    } else {
      swtch = 1;
    }
  }
  console.log(row);
}



// we do not loop intare each time
// 1
// 01
// 010
// 1010

let swtch = 1;
for (let i = 0; i < ele; i++) {
  let row = "";
  for (let j = 0; j < i + 1; j++) {
    row += swtch;
    if (swtch == 1) {
      swtch = 0;
    } else {
      swtch = 1;
    }
  }
  console.log(row);
}