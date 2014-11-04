var findMaxNum = [55, 3, 75, 10];

function maxValue(a) {
  var maximumInt = a[0];
  for (var i = 0; i < a.length; i++){
    maximumInt = (maximumInt > a[i] ? maximumInt : a[i]);
  }
  return maximumInt;
}

console.log('Your maximum value is: ' + maxValue(findMaxNum));