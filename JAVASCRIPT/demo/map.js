let numbers = [1, 2, 3];

let result=numbers.map(function(number){
  return number * 2;
}   );

let result2=numbers.map(number => number * 2);
console.log(result);
console.log(result2);