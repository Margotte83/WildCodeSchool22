const numbers = [1, 2, 3];

const newArray = numbers.map(function (number) {
  return number * 2;
});
console.log(newArray);

Array.prototype.myMap = function (callback) {
  const newArray = [1,2,3];
  this.forEach(function (number) {
    newArray.push(callback(number));
  });
  return newArray;
};
