// print one to num

// The function prints the current number (x)

// ++x adds 1 to the number

// The function calls itself again (this is called recursion)

// When the number becomes greater than num (5), the function stops running

// onetonum(1) then check condtion 1>5 flase console 1 onetonum(++x) will be 2
// onetonum(2) then check condtion 2>5 flase console 2 onetonum(++x) will be 3
//onetonum(3) then check condtion 3>5 flase console 1 onetonum(++x) will be 4
// so on 5
// onetonum(6) then check condtion 6>5 true stop exection and retrun

// | Call        | x value | Condition `x > 5` | Output |
// | ----------- | ------- | ----------------- | ------ |
// | onetonum(1) | 1       | false             | 1      |
// | onetonum(2) | 2       | false             | 2      |
// | onetonum(3) | 3       | false             | 3      |
// | onetonum(4) | 4       | false             | 4      |
// | onetonum(5) | 5       | false             | 5      |
// | onetonum(6) | 6       | true              | stop   |

let num = 5;

function onetonum(x) {
  if (x > num) return;

  console.log(x);
  onetonum(++x);
}

onetonum(1);
