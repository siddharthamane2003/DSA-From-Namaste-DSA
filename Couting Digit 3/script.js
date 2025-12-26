// write function that returns count of digits in number
// Ex=> 2345 count=0.
// 2345 > 0  2345/10 => 234 count=1
// 234>0     234/10=>23    count=2
// 23>0      23/10=2     count=3
// 2>0       2/10=0      count=4
// 0>0 false. rertrun count.

// corner case if 0 then count 1
// if -ve number -7890 then loop will not run sol convert into the +ve number.
// Think The corner Case.
function countDigit(number) {
  let count = 0;
  if (number == 0) return 1;

  number = Math.abs(number);

  while (number > 0) {
    number = Math.floor(number / 10); // give the floor value. so tion is Math.floor
    count++;
  }
  return count;
}

console.log(countDigit(-1234));
