function addSomeNumbers(a) {
  var total = 0;
  for (i = 0; i < a.length; i++){
    total += addThese[i];
  }
  console.log('Your total is: ' + total);
}

var addThese = [10, 20, 30, 40];
var yourResult = addSomeNumbers(addThese);
