// Remove Elements
// ex => [3,2,1,5,3,4,8,3] val=>3
// val !=3 condtion. shift the i value and incrment the x.

// x=0 i=0 move i.
// i=1 val not eqaul to move i. then shift  [2,2,1,5,3,4,8,3] moive x=x+1
// x=1 i=2 =>1 then shift  [2,1,1,5,3,4,8,3] move x=x+1
// x=2 i=3 => 5 the shift  [2,1,5,5,3,4,8,3] move x=x+1
// x=3 i=4 => 3 move i
// x=3 i=5 => 4 the shift  [2,1,5,4,3,4,8,3] move x=x+1
// x=4 i=6=> 8 the shift  [2,1,5,4,8,4,8,3] move x=x+1
// x=5 i=7 => 3 array fisish lopp end retrun x.

// Ovreall check the Condition and if true shift i and Update x.

let arr = [3, 2, 1, 5, 3, 4, 8, 3];

function RemoveDuplicate(arr, value) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== value) {
      arr[x] = arr[i];
      x = x + 1;
    }
  }
  console.log(arr);
  return x;
}
console.log(RemoveDuplicate(arr, 3));