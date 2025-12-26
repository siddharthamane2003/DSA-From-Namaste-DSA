// Revrse Number :
// Is simlier to Palerdome Number.
// we are not cheking the condtions of palerome.
// Negative Number Then That we have to handle.
// Save to varble. If Number is Negative Then convert inot the +ve. and apply samen loggic of +ve no.
// else return +ve Number.

function ReverseNumber(Number) {
  let OrgNumber = Number; // save to varible.
  Number = Math.abs(Number); // Convert into the +ve
  let revNumber = 0;

  while (Number > 0) {
    let reminder = Number % 10;
    revNumber = revNumber * 10 + reminder;

    Number = Math.floor(Number / 10);
  }

  //   if (OrgNumber < 0) return -revNumber; // if -ve then add the -ve
  //   else return revNumber; // positve number.

  let limit = Math.pow(2, 31); // it betwwn the range.
  if (revNumber < -limit || revNumber > limit) return 0;

  return OrgNumber < 0 ? -revNumber : revNumber;
}

console.log(ReverseNumber(6789));
console.log(ReverseNumber(-6789));
console.log(ReverseNumber(1234));
