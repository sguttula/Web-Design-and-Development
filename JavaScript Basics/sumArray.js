var sum =  [5, 2, 'a', 4, 7, true, 'b', 'c', 7, 8, false];
for( var i = 0; i < sum.length-1; i++){ 
    if ( sum[i] === 'a') {
      sum.splice(i, 1); 
    }
    if ( sum[i] === true) {
        sum.splice(i, 1); 
      }
      if ( sum[i] === 'b') {
        sum.splice(i, 1); 
      }
      if ( sum[i] === 'c') {
        sum.splice(i, 1); 
      }
 }
 sum.pop();
 function operation(a, b) {
    return a + b;
}
  var answer = sum.reduce(operation, 0);

console.log(answer);
