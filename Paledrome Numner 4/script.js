// Palerdrom Number
// 121 => if we reverse => 121 these pealedrome.

// solution :Aplly while loop number > 0
//  Each Time we have to take Reminder.
// Then That reminder + rev*10  get rev.
// then reduse number.
// ex->1.  121 check number >0
// 121 => reminder 1
// rev*10+rem =rev=1
// 121 => reduces as => 12
// 2. 12 => 12>0 yes
// 12 reminder 2
// rev*10+rem=1*10+2=12
// 12 reduse =>1
// 3. 1>0 yes
// remoder 1 rem =1
// rev=12*10+rem=121
// reduces as 0
//4 . 0>0 false stop loop.
// check constion org==rev yes return true. else false.
// The number will at the 0 so save number to varible.

function PalerdromNumber(number) {
  let orgNumber = number;
  let revNumber = 0;

  if (number > 0) return false; // negative number are not paledrome

  while (number > 0) {
    let reminder = number % 10;
    revNumber = revNumber * 10 + reminder;

    number = Math.floor(number / 10);
  }

  // if (revNumber == orgNumber) return true;
  // else return false;

  return revNumber === orgNumber; // retrun true / false.
}

console.log(PalerdromNumber(2345676543));
console.log(PalerdromNumber(121));
console.log(PalerdromNumber(0));




