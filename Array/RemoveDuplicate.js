// Sorted incresing order => [1,2,3,4,5,6,7] Incrasing order.  a[i+1] > a[i]
// Sorted Decrsing Order => [7,6,5,4,3,2,1] Descinfg Order     a[i+1]<a[i]
// Non Decrseing Order => [1,2,2,2,3,4,5,6,6,6,7] Consitng the Duplictae Number.   a[i+1]>=a[i]
// in place => we have to chage/modify the array.
// integer => +ve/-ve mentaion Order
// [1,2,2]=> k= 2  arr: [1,2,_] : [1,2]

// [1, 1, 2, 2, 3, 4, 4, 5] =>
// find the unique number and shift the number
// x=0
// i=0=> 1 arr[i]>arr[x] => 1>1 false
// i=1 => 1 false
// i=2 => 2 arr[i]>arr[x] => 2>0 true unsie numer
// so. x=x+1 shift the postion by 1
// x=1 then arr[x]=arr[i] [1, 2, 1, 2, 3, 4, 4, 5]
// then i=3 =>2 arr[i]>arr[x] 2>2  arr[x]=2 beacause of x+1
// i=4 unquse number arr[i]>arr[x] 3>2 true x+1 and arr[x]=arr[i] [1, 2, 3, 2,3, 4, 4, 5]
// i=5 unipque number 4>3 so shift [1, 2, 3, 4,3, 4, 4, 5]
// i=6 => 4 not unise
// i=7 5 unose shift  [1, 2, 3, 4,5, 4, 4, 5]

let arr = [1, 1, 2, 2, 3, 4, 4, 5];

function RemoveDuplicate(arr) {
  let x = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > arr[x]) {
      x = x + 1;
      arr[x] = arr[i];
    }
  }
  console.log(arr);
  return x + 1;
}
console.log(RemoveDuplicate(arr));