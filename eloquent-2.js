// LOOP A TRIANGLE
for (var i = "#"; i.length < 8; i += "#") {
  console.log(i);
}

///////////////////////////*****************/////////////////////////
// FIZZ BUZZ
// print all numbers 1 - 100
// If number is evenly divisble by 3 print "Fizz"
// If number divisble by 5 print "Buzz"
// THEN
// modify program to print "FizzBuzz" for numbers divisble by both 3 and 5
// print "Fizz" or "Buzz" for numbers divisibe by only one of those.


//////////////// FIRST SOLUTION
/*
for (var i = 1; i < 100; i++ ) {
  if (i % 3 !== 0 && i % 5 !== 0) {
    console.log(i);
  } if (i % 3 === 0) {
    console.log("Fizz")
  } if (i % 5 === 0) {
    console.log("Buzz")
  }
}
*/
//////////////////REFACTORED SOLUTION
/*
for (var i = 1; i < 100; i++ ) {
  if (i % 3 === 0) {
    console.log("Fizz")
  } if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i);
  }
}
*/

///////////////// PART TWO
// modify program to print "FizzBuzz" for numbers divisble by both 3 and 5
// Print "Fizz" or "Buzz" for numbers divisibe by only one of those.

for (var i = 1; i < 100; i++ ) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz")
  } else if (i % 3 ===0) {
    console.log("Fizz")
  } else if (i % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(i);
  }
}

/*
///////////////// SOLUTION FROM THE BOOK

for (var n = 1; n <= 100; n++) {
  var output = "";
  if (n % 3 == 0)
    output += "Fizz";
  if (n % 5 == 0)
    output += "Buzz";
  console.log(output || n);
}
*/

///////////////////////////*****************/////////////////////////
