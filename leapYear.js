var year = 2014

for (var i = 1800; i <= year; i++){
  if (i % 400 == 0) {
    console.log(i);
  }
  else if (i % 4 == 0 && i % 100 !== 0){
    console.log(i);
  }
}