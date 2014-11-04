// if divisible by 3 fizz if divisible by 5 buzz
function fizzBuzz (kidsGame) {

  for (var i = 1; i <= kidsGame; i++){
    if (i % 3 == 0 && i % 5 == 0) {
      console.log("fizz buzz");
      }
      else if (i % 3 == 0) {
        console.log("fizz");
      }
      else if (i % 5 == 0) {
        console.log("buzz");
      }
      else {
        console.log(i);
      }
  }
}

var x = fizzBuzz(100);