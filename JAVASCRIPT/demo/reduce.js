//faire une somme d'element de tableau en javascript ES6
const notes = [1, 2, 3];
const sumNotes = notes.reduce((accumulator, currentValue) => {
  console.log(accumulator, currentValue);
  return accumulator +=currentValue;
}, 200);
console.log(sumNotes);
//version ES5
const notes2 = [1, 2, 3];
let sum = 0;
for (i = 0; i < notes2.length; i++) {
  sum += notes[i];
}
console.log(sum);
